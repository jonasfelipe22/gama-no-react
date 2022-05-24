import './App.css';

function App(props) {
  return (
    <div>
    <h1>{ props.title } {props.user }</h1>
    <input name="usuario" className="usuario" id="usuario" placeholder="Digite aqui seu usuario :::" />
    </div>
  );
}

export default App;
