import styles from "../../styles/UserForm.module.scss";

import { useForm } from "react-hook-form";
import { updateUser } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "",
  });
  const form = useForm();
  const { handleSubmit } = form;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) return;
    setUser(currentUser);
  }, [currentUser]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(updateUser(user));
  };
  const onChangeInput = (name) => {
    return (event) => {
      setUser({ ...user, [name]: event.target.value });
    };
  };

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <h1>You need to login</h1>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            onChange={onChangeInput("email")}
            className={styles.input}
            value={user.email}
            type="email"
            id="email"
            name="email"
         
          />
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            onChange={onChangeInput("name")}
            value={user.name}
            className={styles.input}
            type="text"
            id="name"
         
          />

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            onChange={onChangeInput("password")}
            value={user.password}
            className={styles.input}
            type="password"
            id="password"
            name="password"
           
          />
          <label className={styles.label} htmlFor="avatar">
            Avatar
          </label>
          <input
            onChange={onChangeInput("avatar")}
            value={user.avatar}
            className={styles.input}
            type="text"
            id="avatar"
            name="avatar"
          
          />
          <button className={styles.btnSubmit}>Update</button>
        </form>
      )}
    </section>
  );
};

export default Profile;
