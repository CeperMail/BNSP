import styles from "./Card.module.css";
import successData from '../../utils/constants/success';
import betulkan from "../../assets/image/data-management.png";
import bersihkan from "../../assets/image/vacuum-cleaner.png";
import upgrade from "../../assets/image/development.png";

function Card() {

    const { success } = successData;

    const fixing = success.find(category => category.services === 'Fixing');
    const cleaning = success.find(category => category.services === 'Cleaning');
    const upgrading = success.find(category => category.services === 'Upgrading');

    return (
      <div className={styles.container}>
        <div className={styles.card__text}>
          <h2 className={styles.card__title}>Our services</h2>
          <h4 className={styles.card__sub}>Data from our services</h4>
        </div>
        <div className={styles.card__box}>
          <div className={styles.card__card}>
            <h2 className={styles.card__category}>
              <img className={styles.card__image} src={betulkan} alt="" />
              Fixing device
            </h2>
            <h1 className={styles.card__confirmed}>{fixing.total}</h1>
          </div>
          <div className={styles.card__card}>
            <h2 className={styles.card__category}>
              <img className={styles.card__image} src={bersihkan} alt="" />
              Cleaning device
            </h2>
            <h1 className={styles.card__confirmed}>{cleaning.total}</h1>
          </div>
          <div className={styles.card__card}>
            <h2 className={styles.card__category}>
              <img className={styles.card__image} src={upgrade} alt="" />
              Upgrading device
            </h2>
            <h1 className={styles.card__confirmed}>{upgrading.total}</h1>
          </div>
        </div>
      </div>
    );
}

export default Card;
