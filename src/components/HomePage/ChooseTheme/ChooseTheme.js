import PropTypes from "prop-types";
import styles from "./ChooseTheme.module.css";
import {THEME_DARK, THEME_BLUE, THEME_LIGHT, useTheme} from "../../../context/ThemeProvider";

const ChooseTheme = () =>{
    const isTheme = useTheme();
    return(
        <>
            {/*<button onClick={()=> isTheme.change(THEME_LIGHT)}>Light</button>*/}
            {/*<button onClick={()=> isTheme.change(THEME_DARK)}>Dark</button>*/}
            {/*<button onClick={()=> isTheme.change(THEME_BLUE)}>Blue</button>*/}
        </>
    )
}

ChooseTheme.propTypes = {
    // text: PropTypes.string
}

export default ChooseTheme;