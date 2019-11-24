import React from 'react';

//style
import './components/styles/dashboard.css';

//componentes
import Aside from './components/aside';
import Header from './components/Header';
import Main from './components/Main';


function App() {


  return (

    <div className="App">
      <div class="grid-container">
        <Header />
        <Aside />
        <Main />

      </div>
    </div>
  );
}

export default App;
