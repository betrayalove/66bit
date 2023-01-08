import NewsList from "../components/news-list";

import React from "react";
import Footer from "../components/footer/footer";


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