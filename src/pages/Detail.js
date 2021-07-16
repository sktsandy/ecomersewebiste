import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.ProductsReducers);
  // console.log(singleProduct);

  useEffect(() => {
    dispatch({ type: "SINGLE_PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="single_product_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-4">
                  <div className="single_product_image">
                    <img
                      src={`/images/${singleProduct.img}`}
                      alt="product_img"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="detail_info_wrapper">
                    <h3> {singleProduct.name} </h3>
                    <h5> ₹{singleProduct.price} </h5>
                    <span>₹{(singleProduct.discountPrice * quantity).toFixed(2)}</span>

                    <div className="product_detail_info">
                      <span className="dec" onClick={decQuantity}>
                        
                        <AiOutlineMinus />
                      </span>
                      <span className="quantity"> {quantity} </span>
                      <span
                        className="inc"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        
                        <AiOutlinePlus />
                      </span>

                      <div className="cart_btn">
                        <button onClick={()=> dispatch({ type: 'ADD_TO_CART',
                         payload:{singleProduct, quantity} })}> ADD TO CART</button>
                      </div>
                    </div>
                    <div className="product_discription">
                      <h4> Details </h4>
                      <p> {singleProduct.disc} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Detail;
