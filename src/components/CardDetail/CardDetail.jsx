import styles from "./CardDetail.module.css";
import betulkan from "../../assets/image/data-management.png";
import bersihkan from "../../assets/image/vacuum-cleaner.png";
import upgrade from "../../assets/image/development.png";

function CardDetail() {

    return (
      <div className={styles.container}>
        <div className={styles.card__text}>
          <h2 className={styles.card__title}>Services Detail</h2>
        </div>
        <div className={styles.card__box}>
          <div className={styles.card__card}>
            <h2 className={styles.card__category}>
              <img className={styles.card__image} src={betulkan} alt="" />
              Fixing device
            </h2>
            <p className={styles.card__p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reprehenderit, vero deleniti sint earum quis facilis suscipit
              impedit iusto aut consequatur voluptates quisquam similique magni
              sunt, itaque aliquam ab porro.
            </p>
          </div>
          <div className={styles.card__card}>
            <h2 className={styles.card__category}>
              <img className={styles.card__image} src={bersihkan} alt="" />
              Cleaning device
            </h2>
            <p className={styles.card__p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reprehenderit, vero deleniti sint earum quis facilis suscipit
              impedit iusto aut consequatur voluptates quisquam similique magni
              sunt, itaque aliquam ab porro.
            </p>
          </div>
          <div className={styles.card__card}>
            <h2 className={styles.card__category}>
              <img className={styles.card__image} src={upgrade} alt="" />
              Upgrading device
            </h2>
            <p className={styles.card__p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reprehenderit, vero deleniti sint earum quis facilis suscipit
              impedit iusto aut consequatur voluptates quisquam similique magni
              sunt, itaque aliquam ab porro.
            </p>
          </div>
        </div>
      </div>
    );
}

export default CardDetail;
