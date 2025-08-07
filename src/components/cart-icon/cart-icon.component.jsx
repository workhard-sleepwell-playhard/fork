

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import {selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import {setIsCartOpen } from '../../store/cart/cart.action';

import { useDispatch, useSelector } from 'react-redux'; 

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  const cartCount = useSelector(selectCartCount);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
