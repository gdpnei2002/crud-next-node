import React from "react";

export default function Card(props) {
    return (
        <>
          
          <div className="card-container" onClick={() => handleClickCard()}>
            <h1 className="card-title">{props.name}</h1>
            <p className="card-id">{props.id}</p>
            <p className="card-cartegory">{props.category}</p>
            <h3 className="card-cost">R${props.cost}</h3>
          </div>
        </>
      );
}