import React from "react";
import Footer from "./Components/Footer";
import ReactRouter from "./ReactRouter";
import { AppWrapper } from "./AppWrapper"

function App() {
    return (
        <AppWrapper>
            <ReactRouter />
            <Footer />
        </AppWrapper>
    )
}

export default App;