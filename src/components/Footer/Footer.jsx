import styles from "../../styles/Footer.module.scss";
import Logo from "../../images/logo.svg";

const socials = ["instagram", "facebook", "youtube"];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={Logo} alt="stuff logo" />
      <span>Developed by Ion Petrascu</span>
      <div className={styles.socials}>
        {socials.map((social, index) => {
          return (
            <svg className={styles.icon} key={index}>
              <use xlinkHref={`../../../public/sprite.svg#${social}`} />
            </svg>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
