import React from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.scss";

const Form = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	// console.log(watch("example")); // watch input value by passing the name of it

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input
				className={styles.input}
				name="name"
				defaultValue="test"
				ref={register}
			/>

			{/* include validation with required or other standard HTML validation rules */}
			<input
				className={styles.input}
				name="subject"
				ref={register({ required: true })}
			/>
			{/* errors will return when field validation fails  */}

			<textarea
				className={styles.textarea}
				name="message"
				ref={register({ required: true })}
			/>
			{errors.exampleRequired && <span>This field is required</span>}

			<input className={styles.submit} type="submit" />
		</form>
	);
};

export { Form };
