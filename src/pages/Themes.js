import "./pages.css"
import Footer from "../components/footer";
import React, {useEffect, useState} from "react";
import ChooseTheme from "../components/HomePage/ChooseTheme";
import '../styles/styles.css'
import {THEME_DARK, THEME_BLUE, THEME_LIGHT, useTheme} from "../context/ThemeProvider"

const Themes = () => {
    const isTheme = useTheme();
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
        <header className='header__text themes_themes'>Темы
        </header>
        <ChooseTheme/>
        <ul>
            <li>
                <button style={{
                    border: `2px solid ${light.secondColor}`,
                    borderRadius: '10px',
                    padding: '10px',
                    fontSize: '20px',
                    margin: '10px 0',
                    cursor: 'pointer',
                    color: `${light.textColor}`,
                    backgroundColor: `${light.mainColor}`
                }} onClick={() => isTheme.change(THEME_LIGHT)}>{light.title}</button>
            </li>
            <li>
                <button style={{
                    border: `2px solid ${dark.secondColor}`,
                    borderRadius: '10px',
                    padding: '10px',
                    fontSize: '20px',
                    margin: '10px 0',
                    cursor: 'pointer',
                    color: `${dark.textColor}`,
                    backgroundColor: `${dark.mainColor}`
                }} onClick={() => isTheme.change(THEME_DARK)}>{dark.title}</button>
            </li>
            <li>
                <button style={{
                    border: `2px solid ${blue.secondColor}`,
                    borderRadius: '10px',
                    padding: '10px',
                    fontSize: '20px',
                    margin: '10px 0',
                    cursor: 'pointer',
                    color: `${blue.textColor}`,
                    backgroundColor: `${blue.mainColor}`
                }} onClick={() => isTheme.change(THEME_BLUE)}>{blue.title}</button>
            </li>
        </ul>

        <Footer/>
        </body>
    )
}
export default Themes;