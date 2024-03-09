import CartItem from "./CartItem";
import styles from "../../styles/Cart.module.scss";
import { addItem, removeItem, deleteItem } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Cart = () => {
  const { cart } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
            <button className={styles.Buy}>Proceed to checkout</button>
          </div>
        </>
      ) : (
        <>
          <h1 className={styles.empty}>Cart is empty :(</h1>
          <Link to={ROUTES.HOME}>
            <button className={styles.back}>Return to store</button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Cart;
