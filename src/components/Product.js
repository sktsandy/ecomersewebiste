import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const { products } = useSelector((state) => state.ProductsReducers);
   
  return (
    <>
      <div className="container position_negitive">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3" key={product.id}>
                <div className="product_wrap">
                  <Link to={`/details/${product.id}`}>
                    <div className="product_image">
                      <img src={`/images/${product.img}`} alt="img" />
                    </div>
                  </Link>

                  <div className="product_name">{product.name}</div>

                  <div className="row">
                    <div className="col-5">
                      <div className="product_price">
                        <h4> ₹{product.price} </h4>
                        <span> {product.discount}% </span>
                      </div>
                    </div>

                    <div className="col-7">
                      <div className="product_discount_price">
                        <span>
                          Save {(product.price - product.discountPrice).toFixed(0)}
                        </span>
                        ₹{product.discountPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default Product;
//export {Category};
