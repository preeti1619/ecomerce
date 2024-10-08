import logo from "./logo.svg";
import "./index.css";
import "./App.css";

import Header from "./Components/Hero/Headers/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Comoanies/Companies";
import Residence from "./Residence/Residence";
import Value from "./Components/Hero/Value/Value";
import Contact from "./Components/Hero/Contact/Contact";
import Getstarted from "./Components/Getstarted/Getstarted";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residence></Residence>
      <Value></Value>
  <Contact></Contact>
  <Getstarted></Getstarted>
  <Footer></Footer>
    </div>
  );
}

export default App;
