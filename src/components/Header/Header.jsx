import Logo from "../../images/logo.svg";
import Avatar from "../../images/avatar.jpg";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../redux/user/userSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProductsByQuery,
  clearListSearch,
} from "../../redux/products/productsSlice";
import { srcImage } from "../../utils/urlImage";

const Header = () => {
  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });
  const { cart, currentUser } = useSelector((state) => state.user);
  const [searchText, setSearchText] = useState("");
  const { searchList } = useSelector((state) => state.products);

  const countItems = cart.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
    }
  }, [currentUser]);

  const toggleUser = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    } else {
      navigate(ROUTES.PROFILE);
    }
  };
  const searchProducts = (e) => {
    setSearchText(e.target.value);
    dispatch(getProductsByQuery(searchText));
  };
  const closeSearch = () => {
    setSearchText("");
    dispatch(clearListSearch());
  };

  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        <img src={Logo} alt="Stuff Logo" />
      </Link>
      <div className={styles.info}>
        <div onClick={toggleUser} className={styles.user}>
          <img
            className={styles.userImage}
            src={values.avatar}
            alt="Your avatar image"
          />
          <div className={styles.userName}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <svg className={styles["icon-search"]}>
            <use xlinkHref="../../../public/sprite.svg#search" />
          </svg>
          <input
            value={searchText}
            onChange={searchProducts}
            placeholder="Search for anything..."
            className={styles.search}
            type="search"
          />
          {searchText !== "" ? (
            <>
              {searchList.length >= 1 ? (
                <ul className={styles.productsSearch}>
                  {searchList.map((el) => {
                    return (
                      <Link
                        onClick={closeSearch}
                        to={`/products/${el.id}`}
                        className={styles.link}
                        key={el.id}
                      >
                        <img src={srcImage(el.images[0])} alt={el.title} />
                        <h4>{el.title}</h4>
                      </Link>
                    );
                  })}
                </ul>
              ) : (
                <div className={styles.noResults}>No results</div>
              )}
            </>
          ) : (
            <></>
          )}
        </form>
        <div className={styles.account}>
          <svg className={styles.heart}>
            <use xlinkHref="../../../public/sprite.svg#heart" />
          </svg>
          <Link className={styles.cart} to={ROUTES.CART}>
            <svg className={styles.bag}>
              <use xlinkHref="../../../public/sprite.svg#bag" />
            </svg>
            {countItems > 0 && (
              <span className={styles.countItems}>{countItems}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
