import { Theme } from "./ui/Theme";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <section className={styles.header__title}>
        <h1>Dashboard</h1>
      </section>
      <section className={styles.header__theme}>
        <Theme />
      </section>
    </div>
  );
};
