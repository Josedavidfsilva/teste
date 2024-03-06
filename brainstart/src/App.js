import logo from './logo.svg';
import './App.css';
import im from "./img/logoTela 2.png";

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
                <li><a href='#' className='A'> Ordem da Fila</a></li>
                <li><a href='#' className='B'> Cardápio </a></li>
              </ul>
            </div>
          <div className='imagem'>
              <img src='./img/logoTela 2.png'></img>

          </div>
        </header>
      </body>
    </div>
  );
}

export default App;
