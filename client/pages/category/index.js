import React, {useState, useEffect } from 'react';
import Axios from "axios"
import Card from '../../components/cards/card';

export default function Home() {

  const [values, setValues] = useState();
  const [listCategory, setListCategory] = useState();

  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
};

const handleClickButton = () =>{
  Axios.post("http://localhost:3001/registerCategory", {
    name: values.name,
}).then((response) => {
  console.log(response);
})}

useEffect(() =>{
  Axios.get("http://localhost:3001/getCardsCategory").then((response) =>{
    setListCategory(response.data);
  })
},[])

  return (
    <>
        <div className="app-container">
        <div className="register-container">
          <h1 className="register-title">My Cardinho</h1>
            <input 
              type="text" 
              name="name" 
              placeholder=" Nome" 
              className="register-input"
              onChange={handleChangeValues}/>
          <button 
            className="register-button" 
            onClick={()=>handleClickButton()}>
              Cadastrar
          </button>
        </div>
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
    </>
  )
}