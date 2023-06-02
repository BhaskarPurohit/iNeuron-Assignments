import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <header className={`header ${theme}`}>
            <h1>Theme Toggler</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>


        </header>
    )
}

export default Header