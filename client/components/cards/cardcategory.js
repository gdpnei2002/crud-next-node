import React from "react";
import FormDialog from "../dialog/dialogcategory";

export default function CardCategory(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickCardCategory = () => {
      setOpen(true)
    }

    return (
        <>
          <FormDialog 
                open={open} 
                setOpen={setOpen}
                name={props.name}
                listCardCategory={props.listCardCategory}
                setListCardCategory={props.setListCardCategory}
                id={props.id}/>

          <div className="card-container" onClick={() => handleClickCardCategory()}>
            <h1 className="card-title">{props.name}</h1>
            <p className="card-id">{props.id}</p>
          </div>
        </>
      );
}