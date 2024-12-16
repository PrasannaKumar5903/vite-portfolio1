import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Myservice from "./components/Myservice";
import Resume from "./components/Resume";
import Blog from "./components/Blog";


function App() {
  return (
    <div>
      <Menu/>
     <Home/>
     <Myservice/>
     <Resume/>
     <Blog/>
     
    </div>
  );
}

export default App;
