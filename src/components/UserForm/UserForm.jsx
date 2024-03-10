import styles from "../../styles/UserForm.module.scss";
import Close from "../../images/icon-close.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../redux/user/userSlice";
import UserLoginFrom from "./UserLoginFrom";
import UserSignUpForm from "./UserSignUpForm";

const UserForm = () => {
  const { showForm, typeForm } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(toggleForm(false));
  };

  if (!showForm) {
    return <></>;
  }
  return (
    <div onClick={closeForm} className={styles.overlay}>
      <aside
        onClick={(event) => event.stopPropagation()}
        className={styles.sidebar}
      >
        <button className={styles.close} onClick={closeForm}>
          <img src={Close} alt="icon close " />
        </button>
        {typeForm === "signup" ? <UserSignUpForm /> : <UserLoginFrom />}
      </aside>
    </div>
  );
};

export default UserForm;
