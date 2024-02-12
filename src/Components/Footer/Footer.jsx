import React from "react";
import './Footer.css'
import img from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'

const Footer =()=>{
    return (
        <div className="footer-all">
        <div className="mx-5 d-flex justify-content-between align-items-center">
            
            <div>
                <img src={img} alt="" width={"100px"}/>
            </div>
            <div>
                <h1 className="fs-6 mt-5 pt-3">Developed by <span className="text-primary fs-3 fw-bold ">Hayder A. Abdullah</span></h1>
            </div>
           
            <div className="d-flex gap-3 mt-1">
            <div>
                <img className="footer-img" src={facebook} alt=""  width={"50px"}/>
            </div>
            
            <div>
                <img className="footer-img" src={instagram} alt=""  width={"50px"}/>
            </div>
            
            <div>
                <img className="footer-img" src={whatsapp} alt=""  width={"50px"}/>
            </div>
            
            </div>
        
        </div>
        </div>
    )
}

export default Footer