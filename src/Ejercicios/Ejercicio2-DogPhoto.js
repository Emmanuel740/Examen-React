import './assets/css/App.css';
import React,{useState} from 'react';
import {gql, useQuery, ApolloProvider} from '@apollo/client';

const GET_DOG_PHOTO = gql` query Dog($breed: String!) {dig(breed:$breed) {id displayImage}}`

function DogPhoto(breed) {
  
  const [imgData, setImgData] = useState();
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  })

  const ObtenerImagen = () =>{
    alert('pres')
  
    if (loading){
      setImgData(data)
      return null;
    } 

    if (error) return `Error! ${error}`
  } 

  return (
      <React.Fragment>
          <img src={imgData} style={{
              height: 100,
              width: 100
          }}/>
          <button
           onClick={ObtenerImagen} 
          >Obtener Imagen</button>
      </React.Fragment>
      
  )
}

function App() {
  return (
    <DogPhoto />

  );
}

export default App;
