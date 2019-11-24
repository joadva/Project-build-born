import React from 'react'



//Component

import Cards from './Main/Cards';
import DownCards from './Main/DownCards';
export const Main = (props) => {
    return (
        <div>
            <div class="main-header">
                <div class="main-header__heading"></div>
                <div class="main-header__updates">Recent Items</div>

            </div>
            <Cards />
            <DownCards />
        </div>


    )
}

export default Main;