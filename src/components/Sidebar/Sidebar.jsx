import styles from "../../styles/Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <ul className={styles.list}>
        <li>
          <Link to="/">Tehnica</Link>
        </li>
        <li>
          <Link to="/">wefee ee</Link>
        </li>
        <li>
          <Link to="/">Tehniewfwe ca</Link>
        </li>
        <li>
          <Link to="/">wefwefwefw</Link>
        </li>
        <li>
          <Link to="/">werer</Link>
        </li>
        <li>
          <Link to="/">eweeew</Link>
        </li>
      </ul>
      <div className={styles.footer}>
        <Link to="/">Help</Link>
        <Link className={styles.conditions} to="/">
          Terms & Conditions
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
