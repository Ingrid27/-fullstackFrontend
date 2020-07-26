// Importando o React
import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './main';


class App extends Component {
  render() {
    return (
      <div>
        <Header name="josé bezerra"/>
        <Main/>
      </div>
    );
  }
}

export default App;