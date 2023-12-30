import React, { useState, useEffect }  from 'react';
import './App.css';
import Axios from 'axios';
import Card from './components/cards/card';

function App() {

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();
  console.log(listGames)

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3003/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) =>{
        console.log(response);
    });
    window.location.reload();
  }; 

  useEffect(()=>{
     Axios.get("http://localhost:3003/getCards").then((response) => {
      setListGames(response.data);
     }); 
  }, [])

  return(
    <div className='app-container'>
      <div className='register-container'>
        <h1 className='reg-title'>Wav Shop</h1>
        <input type="text" name='name' placeholder='Nome'  className='reg-input' onChange={handleChangeValues}/>
        <input type="text" name='cost' placeholder='Preço'  className='reg-input' onChange={handleChangeValues}/>
        <input type="text" name='category' placeholder='Categoria'  className='reg-input' onChange={handleChangeValues}/>
        <button className='reg-button' onClick={handleClickButton}>Cadastro</button>
      </div>

      {typeof listGames !== "undefined" && listGames.map((value) =>{
       return( <Card key={value.id} 
        listCard = {listGames} 
        setListCard = {setListGames} 
        id = {value.idgames}
        name = {value.name}
        cost = {value.cost}
        category = {value.category}
        />
       );
      })};
    </div>
  )
}

export default App;
