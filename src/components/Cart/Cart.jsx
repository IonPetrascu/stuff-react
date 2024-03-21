import CartItem from './CartItem';
import styles from '../../styles/Cart.module.scss';
import { addItem, removeItem, deleteItem } from '../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useState } from 'react';
import { toggleForm, resetCart } from '../../redux/user/userSlice';
import Shop from '../../images/buy.gif'
import Succes from '../../images/succes.gif'


const Cart = () => {
  const { cart, currentUser } = useSelector((state) => state.user);
  const [popup, setPopup] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const dispatch = useDispatch();
 const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const checkoutProceed = () => {
    if (!currentUser) {
      dispatch(toggleForm(true))
      console.log('No user');
    }else{
      setPopup(true)
      console.log('user exist');
    }
  };

  const handleConfirm = ()=>{
    setConfirmed(true)
    setTimeout(()=>{
      setPopup(false)
      setConfirmed(false)
      dispatch(resetCart())
      navigate(ROUTES.HOME)
    },2000)
  }

  const closePopUp = (e)=>{
    e.stopPropagation()
    setPopup(false)
    setConfirmed(false)
  }

  return (
    <section className={styles.cart}>
      {cart.length ? (
        <>
          <h1 className={styles.title}>Your Cart</h1>
          <div className={styles.items}>
            {cart.map((item) => (
              <CartItem
                addItemToCart={() => dispatch(addItem(item))}
                removeItemFromCart={() => dispatch(removeItem(item.id))}
                deleteItemFromCart={() => dispatch(deleteItem(item.id))}
                {...item}
                key={item.id}
              />
            ))}
          </div>
          <div className={styles.footer}>
            <div className={styles.totalPrice}>
              Total price : <span>{totalPrice}$</span>
            </div>
            <button onClick={checkoutProceed} className={styles.Buy}>
              Proceed to checkout
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className={styles.empty}>Cart is empty :(</h1>
          <Link to={ROUTES.HOME}>
            <button className={styles.back}>Return to store</button>
          </Link>
        </>
      )}{
        popup &&
        <div onClick={closePopUp} className={styles.overlay}>
            <div onClick={(event) => event.stopPropagation()} className={styles.popup}>
              <h3 className={styles.title}>
                {currentUser ? 'Confirm your order' : 'You must register'}
              </h3>
              <div className={styles.img}>
                <img src={confirmed ? Succes : Shop} alt='shop cart' />
              </div>
              <div className={styles.buttons}>
                <button onClick={closePopUp} className={styles.cancel}>Cancel</button>
                <button onClick={handleConfirm } className={styles.confirm}>Confirm</button>
              </div>
           </div>
        </div>


      }

    </section>
  );
};

export default Cart;
