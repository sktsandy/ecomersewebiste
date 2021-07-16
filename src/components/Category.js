import React, { useState } from 'react';
import { useSelector } from "react-redux";


const Category = () => {
    const { products } = useSelector((state) => state.ProductsReducers);
    const [ item, setItem ] = useState(products);
    const filterItem = (cateItem) =>{
        const updatedItems = item.filter((curElm) =>{
            return curElm.category === cateItem;
        })

        console.log(updatedItems);
        setItem(updatedItems);
    }


    return (
        <>

        
            <div className="category_main_wrapper">
                <div className="best-offers">
                    <img src='/images/category-1.png' alt="category-img" />
                    <h4> Top Offers </h4>
                </div>
                <div className="fashion_category_wrap" onClick={() => filterItem('fashion')}>
                    <img src='/images/category-2.png' alt="category-img" />
                    <h4> Fashion </h4> 
                </div>

                <div className="home_category_wrap">
                    <img src='/images/category-4.jpg' alt="category-img" onClick={() => filterItem('home')}/>
                    <h4> Home </h4> 
                </div>

                <div className="electronics_category_wrap">
                    <img src='/images/category-3.png' alt="category-img" />
                    <h4> Electronics </h4> 
                </div> 


            </div>
        </>
    )

   
}

export default Category;
