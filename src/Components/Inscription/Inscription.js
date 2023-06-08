import React, {useState} from 'react';
import './Inscription.scss';
import {RegisterRequest} from '../../request';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function Inscription() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	// Redirection vers la page de connexion après inscription
	const timeOutFunction = () => {
		navigate('/login');
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await RegisterRequest(email, password);

			if (response.status === 201) {
				setTimeout(timeOutFunction, 3000);
				// Utilisation de SweetAlert pour afficher un message de succès
				Swal.fire({
					text: `Bonjour ${email} ! Votre compte a bien été créé !`,
					icon: 'success',
					timer: 3000,
					timerProgressBar: true,

					customClass: {
						timerProgressBar: '.inscription-swal-timer',
					},
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='container'>
			<h1>Strateg. In</h1>
			<h2>Inscription</h2>
			<div className='form-container'>
				<form className='form' onSubmit={handleSubmit}>
					<input
						className='form-email'
						type='email'
						name='email'
						value={email}
						placeholder='Adresse e-mail'
						onChange={(event) => setEmail(event.target.value)}
						required
					/>
					<input
						className='form-password'
						type='password'
						name='password'
						value={password}
						placeholder='Mot de passe'
						onChange={(event) => setPassword(event.target.value)}
						required
					/>
					<button type='submit'>S'inscrire</button>
				</form>
			</div>
		</div>
	);
}

export default Inscription;
