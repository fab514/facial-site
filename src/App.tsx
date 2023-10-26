import React from "react";
import Footer from "./Components/Footer";
import ReactRouter from "./ReactRouter";
import { AppWrapper } from "./AppWrapper";

function App() {
  return (
    <AppWrapper data-testid="wrapper">
      <ReactRouter />
      <Footer />
    </AppWrapper>
  );
}

export default App;
