import React, {useState, useEffect} from 'react';
// importando o react e desestruturando os Hooks useState e useEffect
import './App.css';
import axios from 'axios';


function App(props) {
  const[usuario, setUsuario]=useState("");
function handlePesquisa(){
  axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>console.log(response));
  console.log({usuario})
}
  return (
    <>
    <h1>{ props.title } {props.user }</h1>
    <input name="usuario" className="usuario" id="usuario" placeholder="Digite aqui seu usuario::" value={usuario} onChange={e => setUsuario(e.target.value)} />
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    <p>O usuario digitado é {  usuario }</p>
    </>
  );
}

export default App;
