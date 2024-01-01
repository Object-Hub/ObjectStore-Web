import React from "react";
import "./page.mdoule.scss";

function App() {
  return (
    <header>
      <h1>Object Store</h1>
      <nav>
        <ul>
          <li>
            <a href="/"><span>Home</span></a>
          </li>
          <li>
            <a href="/produtos"><span>Produtos</span></a>
          </li>
          <li>
            <button>Criar Orçamento</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
