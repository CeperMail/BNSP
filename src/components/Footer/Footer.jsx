import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>Technova</h1>
          <p className={styles.footer__copyright}>
            Copyright &copy; Muhammad Arifin Ilham 2024
          </p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a href="#">
                Home
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">
                Services
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">
                Details
              </a>
            </li>
            <li className={styles.footer__item}>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
