import './App.css';

function App(props) {
  return (
    <div>
    <h1>{ props.title } {props.user }</h1>
    <input name="usuario" className="usuario" id="usuario" placeholder="Digite aqui seu usuario :::" onChange={e => setUsuario(e.target.value)} />
    <button type="button">Pesquisar</button>
    </div>
  );
}

export default App;
