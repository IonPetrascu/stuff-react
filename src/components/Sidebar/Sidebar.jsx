import styles from "../../styles/Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Loading from "../../images/loading.svg";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { list, isLoading } = useSelector((state) => state.categories);
  const { id } = useParams();
  console.log(list);
  console.log(id);

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <ul className={styles.list}>
        {!list.length && isLoading ? (
          <div>
            <img className={styles.loading} src={Loading} alt="loading" />
          </div>
        ) : (
          list.map((category) => {
            return (
              <li key={category.id}>
                <NavLink
                  className={({isActive}) => isActive && styles['active-category']}
                  to={`/categories/${category.id}`}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })
        )}
      </ul>
      <div className={styles.footer}>
        <NavLink to="/">Help</NavLink>
        <NavLink className={styles.conditions} to="/">
          Terms & Conditions
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
