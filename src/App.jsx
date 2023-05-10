import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetSterted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <GetSterted/>
        <Footer/>
    </div>
  );
}

export default App;
