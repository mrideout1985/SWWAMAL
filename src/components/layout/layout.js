import React from "react";
import { Footer } from "../footer/footer";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
	return <div className={styles["layout-container"]}>{children}</div>;
};

export { Layout };
