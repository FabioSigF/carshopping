import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Styles
import { Avatar, Dashboard, DeleteButton, DeleteWarning, DeleteWarningContent, EditButton, Header, Info, Link, List, MyAdvertise, MyAdvertises, Wrapper } from './Profile.styles'
import { Container, iconsList } from '../../globalStyle';

//Components
import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
import avatar from '../../assets/img/author/seller.jpg';

//hooks
import { useStateContext } from '../../context/ContextProvider';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import Button from '../../components/Buttons/Button/Button';
export default function Profile() {

  const [deleteAdvertise, setDeleteAdvertise] = useState(false);
  const [deleteAdvertiseId, setDeleteAdvertiseId] = useState("");
  const [resultsCounter, setResultsCounter] = useState("0");

  const { user } = useStateContext();
  const { loading, documents: advertises } = useFetchDocuments("advertises");
  const { deleteDocument } = useDeleteDocument("advertises");
  const navigate = useNavigate();

  useEffect(() => {

    if (advertises) {

      setResultsCounter(advertises.filter(item => item.uid === user.uid).length);
    }
  }, [advertises])

  return (
    <>

      <Wrapper>
        <Container>
          <Dashboard>
            <Avatar src={avatar} />
            <Info>
              <li><span>Name:</span> {user.displayName}</li>
              <li><span>E-mail:</span> {user.email}</li>
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
                    <MyAdvertise key={key}>
                      <AdvertiseCard
                        advertise={item}
                      />
                      <EditButton onClick={() => navigate(`edit-car/${item.id}`)}>{iconsList.edit}</EditButton>
                      <DeleteButton onClick={() => {
                        setDeleteAdvertiseId(item.id)
                        setDeleteAdvertise(true)
                        }}>
                        {iconsList.trash}
                      </DeleteButton>
                    </MyAdvertise>
                  ))}
            </List>
          </MyAdvertises>
        </Container>
      </Wrapper>
      {deleteAdvertise && (
        <DeleteWarning>
          <DeleteWarningContent>
            <p>Você tem certeza que deseja deleter permanentemente o anúncio?</p>
            <div>
              <Button onClick={() => {
                deleteDocument(deleteAdvertiseId)
                setDeleteAdvertise(false)
              }}>Deletar</Button>
              <Button onClick={() => setDeleteAdvertise(false)}>Voltar</Button>
            </div>
          </DeleteWarningContent>
        </DeleteWarning>
      )}
    </>
  )
}
