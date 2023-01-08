import "./pages.css"
import Footer from "../components/footer";
import React, {useEffect, useState} from "react";

const Themes = () => {

    const [dark, setDark] = useState([])
    const [light, setLight] = useState([])
    const [blue, setBlue] = useState([])

    const fetchData = async () => {
        const responseDark = await fetch("https://frontappapi.dock7.66bit.ru/api/theme/get?name=dark")
        const responseLight = await fetch("https://frontappapi.dock7.66bit.ru/api/theme/get?name=light")
        const responseBlue = await fetch("https://frontappapi.dock7.66bit.ru/api/theme/get?name=blue")
        setDark(await responseDark.json())
        setLight(await responseLight.json())
        setBlue(await responseBlue.json())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <body className='scroll'>
        <header className='backer'>Темы
        </header>


        <ul>
            <li><a>{dark.title}</a></li>
            <li><a>{light.title}</a></li>
            <li><a>{blue.title}</a></li>
        </ul>

        <Footer/>
        </body>
    )
}
export default Themes;