import NewsList from "../components/news-list";
import "./pages.css"
import React from "react";
import '../components/news/style.css'
import { NavLink } from 'react-router-dom';
import Footer from "../components/footer/footer";
const Main = () => {
    return (
        <body>
        <div>
            <header className='backer'>Новости</header>
            <NewsList/>
            <Footer/>
        </div>
        </body>
    )
}
export default Main;