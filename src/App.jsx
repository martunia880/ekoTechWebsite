import Header from './components/Header';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import './App.css';
import Opinion from './components/Opinion';
import opinionsData from './data/opinions-data';

function App() {
  const opinionsTab = opinionsData.map((item) => {
    return <Opinion key={item.id} {...item} /> 
  })
  return (
    <div className="App">
      <Header />
      <Benefits />
      <Offer />
      <section className="opinions">
            <h2 className="opinions__heading">Opinie</h2>
            <div className="opinions__box">
              {opinionsTab}
            </div>
            <a href="https://fixly.pl/profil/55j8bhat"><button className="button--main">Zobacz więcej opinii</button></a>
        </section>
    </div>
  );
}

export default App;
