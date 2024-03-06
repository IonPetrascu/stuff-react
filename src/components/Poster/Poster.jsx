import Banner from "../../images/banner.png";
import Shoe from "../../images/shoe.png";
import Devices from "../../images/devices.png";

import styles from "../../styles/Poster.module.scss";

const Poster = () => {
  return (
    <section className={styles.poster}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          New Year <span>Sale</span>
        </h3>
        <button>See more</button>
        <img className={styles["image-left"]} src={Shoe} alt="shoe" />
        <img className={styles["image-right"]} src={Devices} alt="Devices" />
      </div>
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className={styles.right}
      ></div>
    </section>
  );
};

export default Poster;
