import React, {useRef} from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Offers from './components/Offers';
import './App.css';
import Opinions from './components/Opinions';

function App() {
  const secondComponentRef = useRef(null);
  return (
    <div className="App">
      <Header secondComponentRef={secondComponentRef}  />
      <Benefits />
      <Offers secondComponentRef={secondComponentRef} />
      <Opinions />
    </div>
  );
}

export default App;
