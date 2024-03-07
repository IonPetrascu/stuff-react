import styles from "../../styles/Sidebar.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../images/loading.svg";
const Sidebar = () => {
  const { list, isLoading } = useSelector((state) => state.categories);

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <ul className={styles.list}>
        {!list.length && isLoading ? (
          <div>
            <img className={styles.loading} src={Loading} alt="loading" />
          </div>
        ) : (
          list.map(({ name, id }) => {
            return (
              <li key={id}>
                <Link to={`/categories/${id}`}>{name}</Link>
              </li>
            );
          })
        )}
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
