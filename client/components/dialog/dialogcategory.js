import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditCategory = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
    })
    handleClose();
  };

  const handleDeleteCategory = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`)
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
                disabled
                margin="dense"
                id="id"
                label="id"
                defaultValue={props.id}
                type="text"
                fullWidth/>
          <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nome do produto"
                defaultValue={props.name}
                type="text"
                onChange={handleChangeValues}
                fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteCategory()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditCategory()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}