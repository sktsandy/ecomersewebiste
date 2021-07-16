import React from 'react';
import Product from '../components/Product';

const Products = () => {
    return (
        <>
            <div className="product_main_wrap">
            <h2> Our Products  </h2>
                <div className="dic_line"> </div>
                <div className="product_page_wrapper">
                 <Product />
                 </div>
            </div>
    
           
        </>
    )
}

export default Products;
