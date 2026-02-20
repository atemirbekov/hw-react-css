import styles from "../styles/Main.module.scss";

export default function Main() {
  return (
    // hero, sections, cards
    <main className={styles.main}>
      <section className="home">
        <section className="hero"></section>
        <section className="clients"></section>
        <section className="community"></section>
      </section>

      <section className="body">
        <section className="unlock"></section>
        <section className="achievements"></section>
        <section className="calender"></section>
        <section className="customers"></section>
        <section className="updates"></section>
      </section>

      <section className="demo"></section>
    </main>
  );
}
