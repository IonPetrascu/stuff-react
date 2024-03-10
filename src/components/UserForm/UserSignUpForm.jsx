import { useForm } from "react-hook-form";
import styles from "../../styles/UserForm.module.scss";
import { createUser, toggleTypeForm } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

const UserSignUpForm = () => {
  const form = useForm();
  const dispatch = useDispatch();

  const handleTypeFrom = () => {
    dispatch(toggleTypeForm("login"));
  };
  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    dispatch(createUser(data));
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
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          {...register("name")}
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
        <label className={styles.label} htmlFor="avatar">
          Avatar
        </label>
        <input
          className={styles.input}
          type="text"
          id="avatar"
          name="avatar"
          {...register("avatar")}
        />
        <div onClick={handleTypeFrom} className={styles.link}>
          I already have an account
        </div>
        <button className={styles.btnSubmit}>Create an account</button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
