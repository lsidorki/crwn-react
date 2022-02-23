import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    
    const cartItems  = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
                :
                (<span className="empty-message">Your Cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }
            } >GO TO CHECKOUT</CustomButton>
    </div>
)}

export default CartDropdown;