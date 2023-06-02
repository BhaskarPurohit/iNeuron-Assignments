import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = ()=>{
    const {theme} = useContext(ThemeContext)

    return(
        <main className={`content ${theme}`}>
            <p>This is main content</p>
        </main>
    )

}

export default Content