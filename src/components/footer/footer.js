import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div >
        <footer className='header__text themes_themes '>

                <p><NavLink to="/" className='main-footer'>новости</NavLink></p>
        <p ><NavLink to="/themes" className='main-footer'>темы</NavLink></p>



        </footer>
            </div>
    )
}

export default Footer;
