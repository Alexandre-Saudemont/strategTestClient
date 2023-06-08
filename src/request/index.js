import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:5000',
});

// Permet d'ajouter le token dans le header de chaque requête
export const setAuthToken = (token) => {
	if (token) {
		axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axiosInstance.defaults.headers.common['Authorization'];
	}
};

// Requêtes vers l'API pour la création d'un compte utilisateur
export const RegisterRequest = async (email, password) => {
	try {
		const response = await axiosInstance.post('/register', {
			email,
			password,
		});

		return response;
	} catch (error) {
		console.error(error);
	}
};

// Requêtes vers l'API pour la connexion d'un utilisateur
export const LoginRequest = async (email, password) => {
	try {
		const response = await axiosInstance.post('/login', {
			email,
			password,
		});

		const token = response.data.token;
		setAuthToken(token);
		return response;
	} catch (error) {
		console.error(error);
	}
};

// Requêtes vers l'API pour récupérer tous les utilisateurs
export const getAllUsers = async () => {
	try {
		const response = await axiosInstance.get('/users');
		console.log('response de tous les utilisateurs', response);
		return response;
	} catch (error) {
		console.error(error);
	}
};
