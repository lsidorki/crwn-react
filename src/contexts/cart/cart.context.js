import { createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    toggleHidder: () => {}
})

export default CartContext;