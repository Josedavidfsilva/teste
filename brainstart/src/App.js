import logo from './logo.svg';
import './App.css';
import im from "./img/iconSair.png";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <div className='top'>
            <h2> CardápioFácil </h2>
          </div>
            <div className='opcoes'>
              <ul>
                <li><a href='#' className='A'> Cardápio </a></li>
                <li><a href='#' className='B'> Ordem da Fila  </a></li>
              </ul>
            </div>
          <div className='imagem'>
            <a href='#'>
              <img src={im}></img>
            </a>

          </div>
        </header>
      </body>
    </div>
  );
}

export default App;
