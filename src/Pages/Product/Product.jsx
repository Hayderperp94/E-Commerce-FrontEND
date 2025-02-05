import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";

const Product = () => {
const [product, setproduct] = useState([]);

const url = window.location.href;
const IDpackage = url.match(/\/(\d+)$/)[1];

  const getproduct = () => {
    axios
      .get("https://localhost:7124/api/Products/GetAllProd")
      .then((res) => {
        setproduct(res.data);
      });
  };

  useEffect(() => {
    getproduct();
  }, []);
  
  return (
    <div className="bg-div">
      <div>
      <h1 className="fw-bold text-danger text-center">تعرف على المنتجات الكثيرة  في قسم {IDpackage==1? "الهواتف المحمولة": IDpackage==2? "اجهزة الحاسوب": IDpackage==3? "الاجهزة القابلة للأرتداء":"NOT EXIST"}</h1>
     </div>
     <div className="row justify-content-center p-5"> {/* Use row ONCE */}
        {product?.filter((el)=>el.categoryId==IDpackage).map((el, index) => (
        <div className="col-md-3 col-sm-6 col-lg-4 col-12 mb-4">

          <Card 
            key={index} 
            name={el.prodName} 
            desc={el.prodDescription}
            img={el.images.length > 0 ? el.images[0].imageUrl : "not found"}
            path={`/productdetails/${el.id}`}
          />
          
        
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product


