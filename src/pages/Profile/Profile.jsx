import React from 'react'
import { Avatar, Dashboard, EditButton, Header, Info, Link, List, MyAdvertise, MyAdvertises, Wrapper } from './Profile.styles'
import { useStateContext } from '../../context/ContextProvider'
import { Container, iconsList } from '../../globalStyle';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useEffect } from 'react';
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import { useState } from 'react';
import avatar from '../../assets/img/author/seller.jpg'
import { useNavigate } from 'react-router-dom';
export default function Perfil() {

  const [resultsCounter, setResultsCounter] = useState("0");

  const { user } = useStateContext();
  const { loading, documents: advertises } = useFetchDocuments("advertises");

  const navigate = useNavigate();

  useEffect(() => {

    if (advertises) {

      setResultsCounter(advertises.filter(item => item.uid === user.uid).length);
    }
  }, [advertises])

  return (
    <Wrapper>
      <Container>
        <Dashboard>
          <Avatar src={avatar} />
          <Info>
            <li>Name: {user.displayName}</li>
            <li>E-mail: {user.email}</li>
          </Info>
        </Dashboard>

        <Header>
          <span>Anúncios ( {advertises && resultsCounter} )</span>
        </Header>
        <MyAdvertises>
          <List>
            {loading && (<p>Carregando...</p>)}
            {resultsCounter === 0 && (<p style={{ whiteSpace: "nowrap" }}>Você ainda não possui anúncios! <Link href='/advertise'> Clique aqui</Link> para começar.</p>)}
            {advertises &&
              advertises
                .filter((item) => item.uid === user.uid)
                .map((item, key) => (
                  <MyAdvertise>
                    <AdvertiseCard
                      advertise={item}
                      key={key}
                    />
                    <EditButton onClick={() => navigate(`edit-car/${item.id}`)}>{iconsList.edit}</EditButton>
                  </MyAdvertise>
                ))}
          </List>
        </MyAdvertises>
      </Container>
    </Wrapper>
  )
}
