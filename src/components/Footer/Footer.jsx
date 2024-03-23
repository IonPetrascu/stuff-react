import styles from '../../styles/Footer.module.scss';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const socials = ['instagram', 'facebook', 'youtube'];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={ROUTES.HOME}>
        <img className={styles.logo} src={Logo} alt="stuff logo" />
      </Link>
      <span>Developed by Ion Petrascu</span>
      <div className={styles.socials}>
        {socials.map((social, index) => {
          return (
            <svg className={styles.icon} key={index}>
              <use xlinkHref={`./sprite.svg#${social}`} />
            </svg>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
