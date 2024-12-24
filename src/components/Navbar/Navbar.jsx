import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Technova</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a to="#">Home</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Services</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Details</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
