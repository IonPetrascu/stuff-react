import { useEffect, useState } from "react";
import styles from "../../styles/Product.module.scss";
import { urlImage } from "../../utils/urlImage";
import { Link } from "react-router-dom";
import { ShortenedString } from "../../utils/ShortenedString";
import { addItem } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
const sizes = [4, 4.5, 5];

const Product = (data) => {
  const { title, price, images = [], description } = data;
  const [bigImage, setBigImage] = useState(images[0]);
  const [sizeItem, setSizeItem] = useState();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    console.log("add item" + data);
    dispatch(addItem(data));
  };

  useEffect(() => {
    if (images.length) {
      setBigImage(urlImage(images[0]));
    }
  }, [images]);

  const handleImage = (image) => {
    setBigImage(image);
  };
  const handleSize = (size) => {
    setSizeItem(size);
  };

  return (
    <section className={styles.product}>
      <div
        className={styles.bigImage}
        style={{ backgroundImage: `${bigImage}` }}
      ></div>
      <div className={styles.images}>
        {images.length &&
          images.map((item, id) => {
            return (
              <div
                onClick={() => handleImage(urlImage(item))}
                key={id}
                style={{ backgroundImage: `${urlImage(item)}` }}
              ></div>
            );
          })}
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.price}>{price}$</span>
        <div className={styles.color}>
          Color: <span>Green</span>
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          {sizes.map((size, id) => (
            <div
              style={sizeItem === size ? { backgroundColor: "#6c3eb8" } : {}}
              onClick={() => handleSize(size)}
              key={id}
            >
              {size}
            </div>
          ))}
        </div>
        {description && (
          <span className={styles.description}>
            {ShortenedString(description)}
          </span>
        )}

        <div className={styles.buttons}>
          <button
            disabled={!sizeItem}
            onClick={addItemToCart}
            className={styles.btnCartAdd}
          >
            Add to cart
          </button>
          <button className={styles.btnFavouritesAdd}>Add to favourites</button>
        </div>
        <div className={styles.onSides}>
          <span className={styles.purchased}>19 people purchased</span>
          <Link to="/" className={styles.btnBack}>
            Retun to store
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
