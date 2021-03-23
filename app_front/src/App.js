import { useState } from "react";
import { useEffect } from "react";
import logo from "./logo.svg";
import Button from "./Button";

import "./App.css";

function App() {
  const [texto_a, setTexto_a] = useState("Primeiramente ok");
  const [Show_h1, setShow_h1] = useState(false);

  useEffect(() => {
    return () => {
      console.log("Texto do anchor mudou!");
    };
  }, [texto_a]);

  const editar_a = () => {
    setTexto_a("Simplesmete eu aprendendo React");
  };

  const mostrar_h1 = () => {
    setShow_h1(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {Show_h1 && <h1>Salve Malak, Slim e Pineapple</h1>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {texto_a}
        </a>
        <Button handleClick={editar_a} text={"Mudar texto do <a> "} />
        <Button handleClick={mostrar_h1} text={"Mostrar novo H1"} />
      </header>
    </div>
  );
}

export default App;
