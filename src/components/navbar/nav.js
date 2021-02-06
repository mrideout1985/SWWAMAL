import React from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.menu}>
				<NavLink
					to="/home"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>Home</p>
				</NavLink>
				<NavLink
					to="/about"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>About</p>
				</NavLink>
				<NavLink
					to="/news"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>News</p>
				</NavLink>
				<NavLink
					to="/campaigns"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>Campaigns</p>
				</NavLink>
				<NavLink
					to="/agreements"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>Agreements</p>
				</NavLink>
				<NavLink
					to="/blog"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>Blog</p>
				</NavLink>
				<NavLink
					to="/contact"
					className={styles.navlink}
					activeClassName={styles.activenavlink}
				>
					<p>Contact</p>
				</NavLink>
			</div>
		</nav>
	);
};

export { Nav };
