import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';



class App extends React.Component {
  

  render(){
    return (
      <div className="App">

        <Header />
        <Footer />

      </div>
    );
  }
}

export default App; 
