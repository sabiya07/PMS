
import './App.css';

import Footer from './components/Footer';
import Header  from './components/Header';
import Navbar from './components/Navbar';
import { Body } from './components/Body';
import Register from './components/Register';


function App() {
  return (
    <>
    {/* <Register/> */}

    <div>
    <Header/>
      <Body/>
      
      
    <Footer/>
    <Navbar/>

    </div>
  
    {/* <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div> */}

    

    </>

  );
}

export default App;
