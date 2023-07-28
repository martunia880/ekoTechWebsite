import React, {useRef} from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Offers from './components/Offers';
import './App.css';
import Opinions from './components/Opinions';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  const secondComponentRef = useRef(null);
  return (
    <div className="App">
      <NavBar />
      <Header secondComponentRef={secondComponentRef}  />
      <Benefits />
      <Offers secondComponentRef={secondComponentRef} />
      <Opinions />
      <Footer />
    </div>
  );
}

export default App;
