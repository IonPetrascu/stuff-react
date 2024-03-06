import Computer from "../../images/computer.png";
import styles from "../../styles/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <span className={styles.sale}>Big sale 20%</span>
      <div className={styles.info}>
        <span className={styles.slogan}>the bestseller of 2024</span>
        <h1 className={styles.title}>LENNON R2D2 NVIDIA 5090 TI</h1>
        <button>Shop Now</button>
      </div>
      <img
        className={styles.image}
        src={Computer}
        alt="LENNON R2D2 NVIDIA 5090 TI"
      />
    </div>
  );
};

export default Banner;
