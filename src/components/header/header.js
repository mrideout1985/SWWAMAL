import React from "react";
import logo from "../../assets/images/cwu-logo.svg";
import dragon from "../../assets/images/dragon.svg";

import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>South West Wales AMAL</h1>

				<span>
					<img src={dragon} alt="dragon" style={{ width: "6rem" }} />
					<img src={logo} alt="logo" style={{ width: "9rem" }} />
				</span>
			</div>
		</header>
	);
};

export { Header };
