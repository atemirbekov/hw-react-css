import styles from "../styles/Header.module.scss";
import logo from "../assets/01-logo.svg";

export default function Header() {
  return (
    // logo, nav
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <nav>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a
              className={`${styles.link} ${styles.current}`}
              aria-current="page"
              href="#"
            >
              Home
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#service">
              Service
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#feature">
              Feature
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#product">
              Product
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#testimonial">
              Testimonial
            </a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.link} href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.btns}>
        <button className={`${styles.btn} ${styles.btn_wht}`}>Login</button>
        <button className={`${styles.btn} ${styles.btn_grn}`}>Sign up</button>
      </div>
    </header>
  );
}
