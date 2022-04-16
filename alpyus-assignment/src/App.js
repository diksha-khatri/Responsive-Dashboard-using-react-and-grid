import React from "react"
import Nav from "./Components/Hero"
import Header from "./Components/Header"
import Title1 from "./Components/Title1"
import Title2 from "./Components/Title2"
import Column1 from "./Components/Column1"
import Column2 from "./Components/Column2"

export default function App(){
    return(
        <div className="main-container">
            {/* <h1>hello</h1> */}
            <Nav />
            <Header />
            <Title1 />
            <Title2 />
            <Column1 />
            <Column2 />
        </div>
    )
}