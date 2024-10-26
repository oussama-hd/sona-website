import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import Header from './compnents/header/header';
import OffcanvasMenu from './compnents/OffcanvasMenu/OffcanvasMenu';
import Hero from './compnents/Hero/Hero';

function App() {
  

  return (
    <>
      <Header />
      <OffcanvasMenu />
      <Hero />
    </>
  );
}

export default App;
