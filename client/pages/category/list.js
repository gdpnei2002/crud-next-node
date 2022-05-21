import React, {useState, useEffect } from 'react';
import Axios from "axios"
import Card from '../../components/cards/card';

export default function Home() {

  const [values, setValues] = useState();
  const [listCategory, setListCategory] = useState();


useEffect(() =>{
  Axios.get("http://localhost:3001/getCardsCategory").then((response) =>{
    setListCategory(response.data);
  })
},[])

  return (
    <div className="app-container">
      {typeof listCategory !=="undefined" &&
          listCategory.map((value) => {
            return(
              <Card
                key={value.id}
                listCard={listCategory}
                setListCategory={setListCategory}
                id={value.idcategory}
                name={value.name}
                >
              </Card>
            )
          })}
  </div>
  )
}