import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

//Components
import Route from './Route';




export const Aside = () => {
  return (

    <aside className="sidenav">
      <BrowserRouter>
        <React.Fragment>
          <ul className="sidenav__list">

            <li className="sidenav__list-item white">
              <Link to="/Monitoreo"> Monitoreo</Link>
            </li>
            <li className="sidenav__list-item">
              <Link to="/Tablas" >Tablas</Link>
            </li>
            <li className="sidenav__list-item">
              <Link to="/Graficas" >Graficas</Link>
            </li>
            <li className="sidenav__list-item">
              <Link to="/Mapa">Mapa</Link>
            </li>



          </ul>
        </React.Fragment>
      </BrowserRouter>
      <Route />
    </aside >

  )
}

export default Aside;