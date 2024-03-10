import Logo from "../../images/logo.svg";
import Avatar from "../../images/avatar.jpg";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../redux/user/userSlice";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });
  const { cart, currentUser } = useSelector((state) => state.user);
  const countItems = cart.length;
  const dispatch = useDispatch();
const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
    }
  }, [currentUser]);

  const toggleUser = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    }else{
      navigate(ROUTES.PROFILE)
    }

  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Stuff Logo" />
      </div>
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
          <input placeholder="Search for anything..." className={styles.search} type="search" />
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
