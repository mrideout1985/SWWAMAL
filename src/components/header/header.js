import React from "react";
import logo from "../../assets/images/cwu-logo.svg";
import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>South West Wales AMAL</h1>
				<img src={logo} alt="logo" />
			</div>
		</header>
	);
};

export { Header };
