import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';


//Pages
import Grafica from './Pages/Graficas';
import Mapa from './Pages/Mapa';
import Monitoreo from './Pages/Monitoreo';
import Tablas from './Pages/Tablas';


const Routes = () => {
    return (

        <BrowserRouter>
            <React.Fragment>
                <Route path="/Monitoreo" component={Monitoreo} />
                <Route path="/Grafica" component={Grafica} />
                <Route path="/Mapa" component={Mapa} />
                <Route path="/Tablas" component={Tablas} />

            </React.Fragment>
        </BrowserRouter>



    )
}

export default Routes;