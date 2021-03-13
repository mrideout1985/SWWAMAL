import React from "react";
import { Link } from "react-router-dom";
import styles from "./agreements.module.scss";

const Agreements = () => {
	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>
						Here you will find the agreements relevant to your
						section.
					</h1>

					<h2>
						Please utilise the dropdown menu below and select your
						category to navigate to the relevent documentation
					</h2>
				</div>
			</header>
			<div className={styles["agreements"]}>
				<div className={styles["nav-links"]}>
					<div className={styles["links"]}>
						Postal
						<div className={styles["dropdown"]}>
							<a href="https://www.cwu.org/wp-content/uploads/2018/03/0555118-royal-mail-national-consultative-ballot-low-res.pdf">
								4 Pillars of security and pay
							</a>
							<a href="https://www.cwu.org/wp-content/uploads/2018/03/IR_Framework_Agreement_1995.pdf">
								industrial relations framework 1995
							</a>
							<a href="https://www.cwu.org/wp-content/uploads/2018/03/The-Way-Forward-Agreement-2000.pdf">
								the way forward agreement
							</a>
							<a href="https://www.cwu.org/wp-content/uploads/2018/03/IR_Framework_Agreement_1995.pdf">
								pensions agreement
							</a>
							<a href="https://www.cwu.org/wp-content/uploads/2018/05/GRPR-Policy-Guidance-for-Branches-1.pdf">
								gdpr policy and guidance for branches
							</a>
						</div>
					</div>
					<div className={styles["links"]}>
						ParcelForce
						<div className={styles["dropdown"]}>
							<Link to="/">unknown</Link>
						</div>
					</div>
					<div className={styles["links"]}>
						Time Off
						<div className={styles["dropdown"]}>
							<Link to="/">unknown</Link>
						</div>
					</div>
					<div className={styles["links"]}>
						Postal
						<div className={styles["dropdown"]}>
							<Link to="/">Distribution</Link>
							<Link to="/">Processing</Link>
							<Link to="/">Deliveries</Link>
						</div>
					</div>
					<div className={styles["links"]}>
						Other
						<div className={styles["dropdown"]}>
							<Link to="/">unknown</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Agreements };
