import React from 'react'
import { Avatar, Dashboard, Header, Info, Link, List, MyAdvertises, Wrapper } from './Profile.styles'
import { useStateContext } from '../../context/ContextProvider'
import { Container } from '../../globalStyle';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useEffect } from 'react';
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import { useState } from 'react';

export default function Perfil() {

  const [resultsCounter, setResultsCounter] = useState("0");

  const { user } = useStateContext();
  const { loading, documents: advertises } = useFetchDocuments("advertises");

  useEffect(() => {

    if (advertises) {
      
      setResultsCounter(advertises.filter(item => item.uid === user.uid).length);
    }
  }, [advertises])

  return (
    <Wrapper>
      <Container>
        <Dashboard>
          <Avatar />
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
            {resultsCounter === 0 && (<p style={{whiteSpace: "nowrap"}}>Você ainda não possui anúncios! <Link href='/advertise'> Clique aqui</Link> para começar.</p>)}
            {advertises &&
              advertises
                .filter((item) => item.uid === user.uid)
                .map((item, key) => (
                  <AdvertiseCard
                    advertise={item}
                    key={key}
                  />
                ))}
          </List>
        </MyAdvertises>
      </Container>
    </Wrapper>
  )
}
