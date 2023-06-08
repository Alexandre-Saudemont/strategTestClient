import React from 'react';
import './App.scss';
import {NavLink} from 'react-router-dom';

function App({isLogged}) {
	return (
		<div className='App'>
			<img src='/images/strategin.jpeg' alt='' />
			<h1>Strateg. In</h1>

			{isLogged ? (
				<>
					<NavLink className='navlink' to='/users'>
						Voir les utilisateurs
					</NavLink>
					<NavLink className='navlink' to='/login'>
						Se déconnecter
					</NavLink>
				</>
			) : (
				<>
					<NavLink className='navlink' to='/register'>
						S'inscrire
					</NavLink>
					<NavLink className='navlink' to='/login'>
						Se connecter
					</NavLink>
				</>
			)}
		</div>
	);
}

export default App;
