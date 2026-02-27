import styles from "../styles/Footer.module.scss";
import logo from "../assets/11a-logo.svg";
import inst from "../assets/11b-social.svg";
import drib from "../assets/11c-social.svg";
import twit from "../assets/11d-social.svg";
import yout from "../assets/11e-social.svg";
import send from "../assets/11f-send.svg";

export default function Footer() {
  return (
    // links, copyright
    <footer className={styles.footer}>
      <div className={styles.info}>
        <img src={logo} alt="logo" />
        <div className={styles.copyright}>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className={styles.social}>
          <img src={inst} alt="instagram" />
          <img src={drib} alt="dribble" />
          <img src={twit} alt="twitter" />
          <img src={yout} alt="youtube" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.company}>
          <p className={styles.header}>Company</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#about">
                About us
              </a>
            </li>
            <li>
              <a className={styles.link} href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a className={styles.link} href="#contact">
                Contact us
              </a>
            </li>
            <li>
              <a className={styles.link} href="#price">
                Pricing
              </a>
            </li>
            <li>
              <a className={styles.link} href="#testim">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.support}>
          <p className={styles.header}>Support</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#help">
                Help center
              </a>
            </li>
            <li>
              <a className={styles.link} href="#terms">
                Terms of service
              </a>
            </li>
            <li>
              <a className={styles.link} href="#legal">
                Legal
              </a>
            </li>
            <li>
              <a className={styles.link} href="#policy">
                Privacy policy
              </a>
            </li>
            <li>
              <a className={styles.link} href="#status">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.update}>
          <p className={styles.header}>Stay up to date</p>
          <div className={styles.input}>
            <input
              className={styles.email}
              type="email"
              placeholder="Your email address"
            />
            <img src={send} alt="send" />
          </div>
        </div>
      </div>
    </footer>
  );
}
