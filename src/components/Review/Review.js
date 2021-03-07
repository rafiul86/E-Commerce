import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
     const [cart,setCart]  = useState([]);
     const handlePlaceOrder = () => {
        setCart([]);
        processOrder()
    }
     const removeItem = (productKey) => {
         const newCart = cart.filter(pd => pd.key !== productKey )
         setCart(newCart);
         removeFromDatabaseCart(productKey);
     }
        useEffect(()=>{
           const savedCart = getDatabaseCart();
           const productKeys = Object.keys(savedCart);
                const cartProducts = productKeys.map(key =>{
                    const product = fakeData.find(pd => pd.key === key);
                    product.quantity = savedCart[key];
                    return product
                })
            setCart(cartProducts)
        },[]);
        
    return (
        <div className ="shop-container">
            <div className ="product-container">
            <h1> Total ordered Products  : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItems removeItem = {removeItem} key = 
                    {pd.key} product = {pd}></ReviewItems>)
            }
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}>
                    <button onClick={handlePlaceOrder} className = "review-button">Place Order</button>
                    </Cart>
            </div>
        </div>
    );
};

export default Review;