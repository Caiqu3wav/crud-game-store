import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';
import Axios from 'axios';

export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        id:  props.id,
        name: props.name,
        cost: props.cost,
        category: props.category,
    });

    const  handleEditGame = () => {
        Axios.put("http://localhost:3003/edit",{
            id: editValues.id,
            name: editValues.name,
            cost: editValues.cost,
            category: editValues.category,
        });
        handleClose();
    };
  
    const handleClickOpen = () => {
        props.setOpen(true);
      };
    
      const handleClose = () => {
        props.setOpen(false);
      };  

      const handleChangeValues = value =>{
        setEditValues(prevValues=>({
            ...prevValues,
            [value.target.id]: value.target.value,
        }));
      };

  return (
    <div>
      <Dialog 
      open={props.open} 
      onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do jogo"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="Preço"
            defaultValue={props.cost}
            onChange={handleChangeValues}
            type="text"  
            fullWidth
          /><TextField
          autoFocus
          margin="dense"
          id="category"
          label="Categoria"
          defaultValue={props.category}            
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditGame()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}