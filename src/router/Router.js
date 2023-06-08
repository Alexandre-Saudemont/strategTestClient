import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';
import Connexion from '../Components/Connexion/Connexion.js';
import Inscription from '../Components/Inscription/Inscription.js';
import Users from '../Components/Users/Users.js';
import {Route, Routes} from 'react-router-dom';

function Router() {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App isLogged={isLogged} setIsLogged={setIsLogged} />} />
				<Route path='/login' element={<Connexion isLogged={isLogged} setIsLogged={setIsLogged} />} />
				<Route path='/register' element={<Inscription isLogged={isLogged} setIsLogged={setIsLogged} />} />
				<Route path='/users' element={<Users isLogged={isLogged} setIsLogged={setIsLogged} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
