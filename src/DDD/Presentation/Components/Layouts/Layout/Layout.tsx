import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

const header = (
  <div className={styles.header}>
    <Header />
  </div>
);

const footer = (
  <div className={styles.footer}>
    <Footer />
  </div>
);

const content = (children: ReactNode) => (
  <div className={styles.content}>{children}</div>
);

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      {header}
      {content(children)}
      {footer}
    </div>
  );
};

export default Layout;
