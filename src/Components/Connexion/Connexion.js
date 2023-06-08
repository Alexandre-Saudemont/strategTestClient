import React, {useState} from 'react';
import './Connexion.scss';
import {LoginRequest, setAuthToken} from '../../request';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

function Connexion({setIsLogged}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	// Redirection vers la page pour voir les utilisateurs après connexion
	const timeOutFunction = () => {
		navigate('/users');
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await LoginRequest(email, password);

			if (response.status === 200) {
				localStorage.setItem('id', response.data.id);
				setIsLogged(true);

				// Utilisation de SweetAlert pour afficher un message de succès
				Swal.fire({
					text: `Bonjour et bienvenue ${email}, redirection en cours...`,
					icon: 'success',
					timer: 3000,
					timerProgressBar: true,
				});

				setTimeout(timeOutFunction, 3000);
				sessionStorage.setItem('token', response.data.token);
			} else if (response.status === 401) {
				console.log('Mot de passe incorrect');
				Swal.fire({
					text: 'Mot de passe incorrect',
					icon: 'error',
				});
			}

			setAuthToken(response.data.token);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='container'>
			<h1>Strateg. In</h1>
			<h2>Connexion</h2>
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
					<button type='submit'>Se connecter</button>
				</form>
			</div>
		</div>
	);
}

export default Connexion;
