import React, {useState} from 'react';
import './Users.scss';
import {getAllUsers} from '../../request';
function Users() {
	const [users, setUsers] = useState([]);

	// Requete pour récupérer tous les utilisateurs en faisant appel a la fonction getAllUsers
	const requestAllUsers = async () => {
		try {
			const response = await getAllUsers();
			console.log('response de tous les utilisateurs', response.data);
			setUsers(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='users-container'>
			<h1>Utilisateurs</h1>
			<button onClick={requestAllUsers}>Récupérer tous les utilisateurs !</button>
			{users.map((user) => (
				<div key={user._id}>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
}

export default Users;
