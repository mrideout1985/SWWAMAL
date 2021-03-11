import React from "react";
import { Form } from "../../components/form/form";

import styles from "./contact.module.scss";

const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>
					{" "}
					If you have any concerns, Please fill out the form below and
					a member of staff will get back to you as soon as they are
					available. Contact numbers and address of the branch can be
					found at the bottom of every page.
				</p>
			</div>
			<div className={styles.contact}>
				<div className={styles.map}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2476.560315968789!2d-3.821699329786121!3d51.63126295034498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x486e5e07eb93bbdf%3A0x64a4294fbb04be70!2sCommunication%20Workers%20Union%2C%2018%20Neath%20Rd%2C%20Briton%20Ferry%2C%20Neath%20SA11%202YR%2C%20UK!3m2!1d51.630933299999995!2d-3.8191861!5e0!3m2!1sen!2sus!4v1613680782255!5m2!1sen!2sus"
						width="600"
						height="450"
						frameborder="0"
						title="map"
						style={{
							border: "0",
						}}
						allowfullscreen="false"
						aria-hidden="false"
						tabindex="0"
						loading="lazy"
					></iframe>
				</div>
				<div className={styles.formcontainer}>
					<Form />
				</div>
			</div>
		</div>
	);
};

export { Contact };
