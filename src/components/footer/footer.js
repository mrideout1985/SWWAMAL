import React from "react";
import location from "../../assets/images/location-marker.svg";
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";
import styles from "./footer.module.scss";

function Footer() {
	return (
		<footer className={styles["footer"]}>
			<div className={styles["address"]}>
				<img src={location} alt="address" />
				<p>
					CWU South West Wales AMAL
					<br />
					18 Neath Road <br />
					Briton Ferry <br />
					Neath <br />
					SA11 2YR
				</p>
			</div>
			<div className={styles["phone"]}>
				<img src={phone} alt="phone" />
				<p>
					T: 01639 813146
					<br />
					M: 07772 833530{" "}
				</p>
			</div>
			<div className={styles["email"]}>
				<img src={mail} alt="mail" />
				<a href="mailto:c.w.u@btconnect.com">c.w.u@btconnect.com</a>
			</div>
		</footer>
	);
}

export { Footer };
