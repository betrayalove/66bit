import NewsList from "../components/news-list";

import React, {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom';
import Footer from "../components/footer/footer";
import responseLight from './Themes'
import {useTheme} from "../context/ThemeProvider";


const Main = () => {


    return (
        <body>
        <div>
            <header className='backer header__text'>Новости</header>
            <NewsList/>
            <Footer/>

        </div>
        </body>
    )
}
export default Main;