import React from "react";
import Card2 from "./Components/Card";
import "./App.css"
import { CardFooter } from "reactstrap";

const App = () => {
  return (
    <>
    <Card2/>
    <CardFooter style={{textAlign:"center"}}>By <a href="https://www.linkedin.com/in/harshitsingla1761/">Harshit Singla</a> and <a href="https://www.linkedin.com/in/harshpreet931/">Harshpreet Singh</a></CardFooter>
    </>
  )
}

export default App;