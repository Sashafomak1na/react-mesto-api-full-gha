import { useState } from 'react';

export default function AuthForm({
	title,
	children,
	handleSubmit,
	textOfButton
}) {

	const [formValue, setFormValue] = useState({
		password: '',
		email: '',
	});

	function onSubmit(e) {
		const { email, password } = formValue;
		handleSubmit(e, password, email)
	}
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setFormValue({
			...formValue,
			[name]: value
		})
	};

	return (
		<div className="authentication">
			<h2 className="authentication__title">{title}</h2>
			<form className="authentication__container" onSubmit={onSubmit}>
				<input
					className="authentication__input"
					required
					type="email"
					name="email"
					minLength={6}
					id="email-input"
					placeholder="Email"
					value={formValue.email}
					onChange={handleChange}
				/>
				<input
					className="authentication__input"
					required
					minLength={6}
					type="password"
					name="password"
					id="password-input"
					placeholder="Пароль"
					value={formValue.password}
					onChange={handleChange}
				/>
				<button className="authentication__submit" type="submit"> {textOfButton} </button>
			</form>
			{children}
		</div>
	);
};