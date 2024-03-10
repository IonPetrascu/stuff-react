import styles from "../../styles/UserForm.module.scss";

import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { toggleTypeForm } from "../../redux/user/userSlice";

const UserLoginFrom = () => {
  const form = useForm();
  const dispatch = useDispatch();

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };
  const handleTypeFrom = () => {
    dispatch(toggleTypeForm("signup"));
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Sign Up</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          {...register("email")}
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          {...register("password")}
        />
        <div onClick={handleTypeFrom} className={styles.link}>
          Create an account
        </div>
        <button className={styles.btnSubmit}>Login</button>
      </form>
    </div>
  );
};

export default UserLoginFrom;
