import React from "react";
import './Catcard.css'
const CatCard = ()=> {
return(
   
  <div className="card col-3 m-2 mt-5" >
    <img src="https://as1.ftcdn.net/v2/jpg/04/29/05/20/1000_F_429052080_ycazkIWim4TW2v3h2Ms3zLq438jlwnJk.jpg" className="card-img-top"/>
           <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
   </div>

)
}

export default CatCard;