import React from 'react';

//style
import './components/styles/dashboard.css';

//componentes
import Aside from './components/Aside';
import Main from './components/Main';


function App() {


  return (

    <div className="App">
      <div class="grid-container">

        <Aside />
        <Main />

      </div>
    </div>
  );
}

export default App;
