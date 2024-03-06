import Logo from "../../images/logo.svg";
import Avatar from "../../images/avatar.jpg";

import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Stuff Logo" />
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <img
            className={styles.userImage}
            src={Avatar}
            alt="Your avatar image"
          />
          <div className={styles.userName}>Guest</div>
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
          <svg className={styles.bag}>
            <use xlinkHref="../../../public/sprite.svg#bag" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
