import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  // const getLocalItem = () =>{
  //   let list = localStorage.getItem('item');
  //   if (list) {
  //     return JSON.parse(localStorage.getItem('item'))
  //   } else {
  //     return [];
  //   }
  // }

  const { shoppingCart, totalQuantity, totalPrice } = useSelector((state) => state.CartReducer);
  //const [ items, setItems ] = useState (shoppingCart);
  const dispatch = useDispatch();


  // useEffect(() => {
  //   localStorage.setItem('item', JSON.stringify((shoppingCart)));
  // }, [shoppingCart]);

 


  return (
    <>
   { shoppingCart.length === 0 ? <> 
   <div className="empty_cart_wrapper">
   <div className="empty_cart_img">
    <img src="images/empty-cart-img.png" alt="empty-cart" />
   </div> 
   <h5 className="text-center"> Missing Cart items? </h5>
   <p className="text-center"> if you want countinue shopping Go back</p>
   <div className="empty_cart_btn text-center">
     <Link to="/products"> <button> Countinue Shopping</button> </Link>
   </div>
   </div>
   </>
    :
    <div className="cart_main_wrapper">
      <div className="container">
      <h2> your cart </h2>
   
      <div className="row">
        <div className="col-9">
          <div className="cart_heading">
            <div className="row">
              <div className="col-2"> Picture </div>
              <div className="col-2"> Name </div>
              <div className="col-2"> Price </div>
              <div className="col-3"> Inc/Dec </div>
              <div className="col-3"> Remove </div>
            
            </div>
          </div>

          {shoppingCart.map((product) => {
            return (
              <>
                <div className="row verticalalin" key={product.id}>
                  <div className="col-2">
                    <div className="cart_img">
                      <img src={`images/${product.img}`} alt="cart_img" />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="cart_name">{product.name}</div>
                  </div>

                  <div className="col-2">
                    <div className="cart_price"> ₹{(product.discountPrice * product.quantity).toFixed(2)}</div>
                  </div>

                  <div className="col-3">
                      <div className="cart_quantity">
                      <span className="cart_dec" onClick={() => dispatch({type: 'DECREMENT', payload: product.id})}>
                      <AiOutlineMinus />
                    </span>
                    <span className="cart_qty"> {product.quantity} </span>
                    <span className="cart_inc" onClick={() => dispatch({type: 'INC', payload: product.id })}>
                      <AiOutlinePlus />
                    </span>
                      </div>
                
                  </div>

                  <div className="col-3">
                    <div className="remove_btn">
                      <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: product.id })}> Delete </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="col-3">
            <div className="cart_summery">
            <h3> Summery </h3>
            </div>
            <div className="summery_detail">
                <div className="summery_qty">
                <h4> Total Items </h4> 
                <span> { totalQuantity } </span>
                </div>
                
                <h4> Grand Total </h4> <span> ₹{ totalPrice.toFixed(2) } </span>

                <div className="checkout_btn">
                    <button> CHECKOUT </button>
                </div>
            </div>
        </div>
      </div>
      </div>
             
      </div>
}
    </>
  );
};

export default Cart;
