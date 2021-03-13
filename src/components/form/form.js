import React from "react";
import styles from "./form.module.scss";

const Form = () => {
	return (
		<form
			className={styles["form"]}
			action="https://getform.io/f/c8166985-e707-4f02-8a36-401495892f6e"
			method="POST"
		>
			<label htmlFor="name" aria-label="name">
				Name
			</label>
			<input
				id="name"
				className={styles["input"]}
				type="text"
				name="name"
			/>

			<label htmlFor="subject" aria-label="subject">
				Subject
			</label>
			<input
				id="subject"
				className={styles["input"]}
				type="email"
				name="email"
			/>

			<label aria-label="message" htmlFor="message">
				Message
			</label>
			<textarea
				id="message"
				className={styles["textarea"]}
				type="text"
				name="message"
			/>

			<label aria-label="submit" htmlFor="submit"></label>
			<button id="submit" className={styles["submit"]} type="submit">
				Send
			</button>
		</form>
	);
};

export { Form };
