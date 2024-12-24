import styles from "./Contact.module.css";
import callus from "../../assets/image/communications.png";
import ig from "../../assets/image/instagram.png";
import fb from "../../assets/image/facebook.png";
import wa from "../../assets/image/whatsapp.png";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contact__left}>
        <img
          className={styles.contact__image}
          src={callus}
          alt="Contact us illustration"
        />
      </div>
      <div className={styles.contact__right}>
        <h1 className={styles.contact__title}>Contact Us</h1>
        <ul className={styles.contact__list}>
          <li className={styles.contact__item}>
            <img className={styles.icon} src={ig} alt="" />
            <a
              className={styles.contact__link}
              href="https://www.instagram.com/technova.id/"
              target="_blank">
              Instagram
            </a>
          </li>
          <li className={styles.contact__item}>
            <img className={styles.icon} src={fb} alt="" />
            <a
              className={styles.contact__link}
              href="https://www.facebook.com/technova.id/"
              target="_blank">
              Facebook
            </a>
          </li>
          <li className={styles.contact__item}>
            <img className={styles.icon} src={wa} alt="" />
            <a
              className={styles.contact__link}
              href="https://wa.me/628123456789"
              target="_blank">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
