import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products,setProducts] = useState(firstTen);
    const handleProduct = () => {
        console.log(products)
    }

        return (
        <div className = "shop-container">
            <div className = "product-container">
                {
                    products.map(product => <Product handleProduct = {handleProduct} product = {product}></Product>)
                }
            </div>
                <div className = "cart-container">
                   This is Cart 
                </div>
        </div>
    );
};

export default Shop;