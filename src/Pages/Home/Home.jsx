import React from "react";
import './Home.css'
import Catcard from "../../Components/Catcard/Catcard";
const Home = ()=> {
return(
   
   <div>
        <div className="bg-div">
            <div className="row justify-content-center">
            <Catcard/>
            <Catcard/>
            <Catcard/>
            <Catcard/>
            <Catcard/>
            </div>
        </div>
    
    
          
    </div>
    
    
)
}

export default Home