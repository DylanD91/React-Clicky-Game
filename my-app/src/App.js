import React, { Component } from 'react';

import Board from './Components/Board/board';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
