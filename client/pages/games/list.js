import React, {useState, useEffect } from 'react';
import Axios from "axios"
import Card from '../../components/cards/card';

export default function Home() {

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();


useEffect(() =>{
  Axios.get("http://localhost:3001/getCards").then((response) =>{
    setListGames(response.data);
  })
},[])

  return (
    <div className="app-container">
      {typeof listGames !=="undefined" &&
          listGames.map((value) => {
            return(
              <Card
                key={value.id}
                listCard={listGames}
                setListGames={setListGames}
                id={value.idgames}
                name={value.name}
                cost={value.cost}
                category={value.category}>
              </Card>
            )
          })}
  </div>
  )
}