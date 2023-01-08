import React, {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import './style.css'

const Footer = () => {
    return (
        <div className='wrapper-footer'>
        <footer className=''>

                <p><NavLink to="/">новости</NavLink></p>
        <p><NavLink to="/themes">темы</NavLink></p>



        </footer>
            </div>
    )
}

export default Footer;
