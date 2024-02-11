import React from "react";
import "./Navbar.css"
import img from '../../assets/logo.png'
const Navbar =()=>{
return(
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="d-flex gap-5 align-items-center">  
          <div className="d-flex gap-3 align-items-center">
          <div>
                <img className="mx-5" src={img} alt="" width="100px" />
            </div>
            <div>
                <h1 className="fs-4">الالكترونيات</h1>
            </div>
            <div>
                <h1 className="fs-4">الالكترونيات</h1>
            </div>
            <div>
                <h1 className="fs-4">الالكترونيات</h1>
            </div>
            <div>
                <h1 className="fs-4">الالكترونيات</h1>
            </div>
            <div>
                <h1 className="fs-4">الالكترونيات</h1>
            </div>

          </div>

          <div>
            <button className="nav-lang-button">
                EN
            </button>
          </div>
      
    </div>
  
</nav>
    </div>
)
}

export default Navbar