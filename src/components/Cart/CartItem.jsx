import styles from "../../styles/CartItem.module.scss";
import Close from "../../images/icon-close.svg";
import { urlImage } from "../../utils/urlImage";
import { Link } from "react-router-dom";
const CartItem = ({
  id,
  title,
  category,
  price,
  quantity,
  addItemToCart,
  images = [],
  removeItemFromCart,
  deleteItemFromCart,
}) => {
  return (
    <div className={styles.item}>
      {images.length > 0 && (
        <div
          style={{ backgroundImage: urlImage(images[0]) }}
          className={styles.image}
        />
      )}

      <Link to={`/products/${id}`} className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.category}>{category?.name}</span>
      </Link>
      <div className={styles.priceForOne}>{price}$</div>
      <div className={styles.buttons}>
        <button onClick={removeItemFromCart} className={styles.btnMinus}>
          <svg className={styles.icon}>
            <use xlinkHref={`../../../public/sprite.svg#minus`} />
          </svg>
        </button>
        <span className={styles.count}>{quantity}</span>
        <button onClick={addItemToCart} className={styles.btnPlus}>
          <svg className={styles.icon}>
            <use xlinkHref={`../../../public/sprite.svg#plus`} />
          </svg>
        </button>
      </div>
      <div className={styles.totalPrice}>
        <span>{quantity * price}$</span>
      </div>
      <div className={styles.close} onClick={deleteItemFromCart}>
        <img src={Close} alt="Icon close" />
      </div>
    </div>
  );
};

export default CartItem;
