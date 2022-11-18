import "./App.css";
import React, { useRef, useState } from 'react';
import Content from "./Components/Content";


function App() {
  const myRef = useRef(null);
  const [theme, setTheme] = useState("Light");
  function myFunction(){
    myRef.current.classList.toggle("mystyle");
    console.log("hello");
    if(theme === "Dark"){
      setTheme("Light");
    }
    else{
      setTheme("Dark");
    }
    
  }
  return (
    <div ref = {myRef} className="App">
      <Content func = {myFunction}/>
    </div>
  );
}

export default App;