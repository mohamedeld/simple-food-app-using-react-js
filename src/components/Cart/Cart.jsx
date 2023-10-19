import React from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import { CART_ITEMS } from '../../data/meals';


const Cart = ({onHide}) => {
  
 
  return (
    <Modal onClose={onHide}>
  
        <ul className={classes['cart-items']}>
        {CART_ITEMS.map(cart=>(
            <li key={cart.id}>{cart.name}</li>
        ))}
        </ul>
    
    <div className={classes.total}>
        <span>Total amount</span>
        <span>3</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHide}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
    </Modal>
  )
}

export default Cart