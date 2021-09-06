import PlayStoreApp from "./Components/PlayStoreApp";
import React,{useState} from "react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import { Helmet } from "react-helmet";

import './CSS/style.css'
import Serivce from "./Components/Serivce";




function App() {
  const [count, setcount] = useState(0)



  return (



    <div className="back" style={{ paddingTop: '1%', paddingBottom: '1%' }}>



      <Helmet>
        <title> Durai Profile</title>
      </Helmet>
      <Home />
      <Serivce />
      <Experience />
      <Education />
      <PlayStoreApp />
      <p style={{color:"white"}}>You clicked {count} times</p>
      <button onClick={() => setcount(count + 1)}>
        Click me
      </button>  
    </div>






  );
}

export default App;
