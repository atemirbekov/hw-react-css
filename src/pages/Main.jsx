import styles from "../styles/Main.module.scss";
import illustr from "../assets/02-illustration.png";
import logo1 from "../assets/03a-logo.svg";
import logo2 from "../assets/03b-logo.svg";
import logo3 from "../assets/03c-logo.svg";
import logo4 from "../assets/03d-logo.svg";
import logo5 from "../assets/03e-logo.svg";
import logo6 from "../assets/03f-logo.svg";
import logo7 from "../assets/03g-logo.svg";
import icon1 from "../assets/04a-icon.svg";
import icon2 from "../assets/04b-icon.svg";
import icon3 from "../assets/04c-icon.svg";
import present from "../assets/05-frame.png";
import icon4 from "../assets/06a-icon.svg";
import icon5 from "../assets/06b-icon.png";
import icon6 from "../assets/06c-icon.svg";
import icon7 from "../assets/06d-icon.svg";
import pana from "../assets/07-pana.png";
import tesla from "../assets/08a-image.jpg";
import logo8 from "../assets/08b-logo.svg";
import arrow from "../assets/08c-arrow.svg";
import card1 from "../assets/09a-image.png";
import card2 from "../assets/09b-image.png";
import card3 from "../assets/09c-image.png";
import whar from "../assets/10-arrow.svg";

export default function Main() {
  return (
    // hero, sections, cards
    <main className={styles.main}>
      <section className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.frame}>
            <div className={styles.ftext}>
              <h2 className={styles.header}>
                Lessons and insights{" "}
                <span className={styles.span}>from 8 years</span>
              </h2>
              <p className={styles.par}>
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <button className={styles.btn}>Register</button>
          </div>
          <img src={illustr} alt="illustration" width={391} />
        </section>
        <section className={styles.clients}>
          <div className={styles.text}>
            <p className={styles.title}>Our Clients</p>
            <p className={styles.desc}>
              We have been working with some Fortune 500+ clients
            </p>
          </div>
          <div className={styles.logos}>
            <img className={styles.logo} src={logo1} alt="logo1" />
            <img className={styles.logo} src={logo2} alt="logo2" />
            <img className={styles.logo} src={logo3} alt="logo3" />
            <img className={styles.logo} src={logo4} alt="logo4" />
            <img className={styles.logo} src={logo5} alt="logo5" />
            <img className={styles.logo} src={logo6} alt="logo6" />
            <img className={styles.logo} src={logo7} alt="logo7" />
          </div>
        </section>
        <section className={styles.community}>
          <div className={styles.text}>
            <p className={styles.title}>
              Manage your entire community in a single system
            </p>
            <p className={styles.desc}>Who is Nextcent suitable for?</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.member}>
                <img src={icon1} alt="icon1" />
                <p className={styles.header}>Membership Organisations</p>
              </div>
              <p className={styles.frame}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <div className={styles.nation}>
                <img src={icon2} alt="icon2" />
                <p className={styles.header}>National Associations</p>
              </div>
              <p className={styles.frame}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.club}>
                <img src={icon3} alt="icon3" />
                <p className={styles.header}>Clubs And Groups</p>
              </div>
              <p className={styles.frame}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.body}>
        <section className={styles.unlock}>
          <img src={present} alt="present" width={442} />
          <div className={styles.frame}>
            <div className={styles.text}>
              <h2 className={styles.header}>
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className={styles.par}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <button className={styles.btn}>Learn More</button>
          </div>
        </section>
        <section className={styles.achievements}>
          <div className={styles.section}>
            <h2 className={styles.heading}>
              Helping a local{" "}
              <span className={styles.title}>business reinvent itself</span>
            </h2>
            <p className={styles.desc}>
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className={styles.counts}>
            <div className={styles.row}>
              <div className={styles.item}>
                <img src={icon4} alt="icon4" />
                <div className={styles.details}>
                  <p className={styles.number}>2,245,341</p>
                  <p className={styles.label}>Members</p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={icon5} alt="icon5" width={48} />
                <div className={styles.details}>
                  <p className={styles.number}>46,328</p>
                  <p className={styles.label}>Clubs</p>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.item}>
                <img src={icon6} alt="icon6" />
                <div className={styles.details}>
                  <p className={styles.number}>828,867</p>
                  <p className={styles.label}>Event Bookings</p>
                </div>
              </div>
              <div className={styles.item}>
                <img src={icon7} alt="icon7" />
                <div className={styles.details}>
                  <p className={styles.number}>1,926,436</p>
                  <p className={styles.label}>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.calendar}>
          <img src={pana} alt="pana" height={433.4} />
          <div className={styles.frame}>
            <div className={styles.text}>
              <h2 className={styles.header}>
                How to design your site footer like we did
              </h2>
              <p className={styles.par}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <button className={styles.btn}>Learn More</button>
          </div>
        </section>
        <section className={styles.customers}>
          <img className={styles.tesla} src={tesla} alt="tesla" />
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.par}>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <div className={styles.frame}>
                <p className={styles.name}>Tim Smith</p>
                <p className={styles.company}>
                  British Dragon Boat Racing Association
                </p>
              </div>
            </div>
            <div className={styles.companies}>
              <div className={styles.logos}>
                <img className={styles.logo} src={logo8} alt="logo8" />
                <img className={styles.logo} src={logo2} alt="logo2" />
                <img className={styles.logo} src={logo3} alt="logo3" />
                <img className={styles.logo} src={logo4} alt="logo4" />
                <img className={styles.logo} src={logo5} alt="logo5" />
                <img className={styles.logo} src={logo6} alt="logo6" />
              </div>
              <div className={styles.meet}>
                <p className={styles.action}>Meet all customers</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.updates}>
          <div className={styles.community}>
            <p className={styles.title}>Caring is the new marketing</p>
            <p className={styles.desc}>
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img className={styles.image} src={card1} alt="card1" />
              <div className={styles.content}>
                <p className={styles.text}>
                  Creating Streamlined Safeguarding Processes with OneRen
                </p>
                <div className={styles.read}>
                  <p className={styles.action}>Readmore</p>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.image} src={card2} alt="card2" />
              <div className={styles.content}>
                <p className={styles.text}>
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </p>
                <div className={styles.read}>
                  <p className={styles.action}>Readmore</p>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.image} src={card3} alt="card3" />
              <div className={styles.content}>
                <p className={styles.text}>
                  Revamping the Membership Model with Triathlon Australia
                </p>
                <div className={styles.read}>
                  <p className={styles.action}>Readmore</p>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.demo}>
        <h2 className={styles.header}>
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className={`${styles.btn} ${styles.ctr}`}>
          Get a Demo
          <img src={whar} alt="white arrow" />
        </button>
      </section>
    </main>
  );
}
