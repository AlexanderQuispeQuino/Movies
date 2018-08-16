import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import './css/fontello-660f111e/css/fontello.css';
import Home from './components/home.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Popup from './components/popup.jsx';

class App extends Component{
  render() {
    return (
      <section className="Movies">
      <Header/>
      {/*header*/}
      <Home />
      {/*ContainerHome*/}
      <Footer/>
      {/*footer*/}
      <Popup/>
    {/*footer*/}
     
      </section>
    );
}
  
}

export default App;
