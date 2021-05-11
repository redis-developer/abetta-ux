import axios from 'axios';

export class AuthenticationService {

	state = {
		test: []
	  }

	async  authenticateWithGoogle() {
		await axios.get("https://abetta-backend.herokuapp.com/login", {
			headers: {}
			// withCredentials: true
		});
	}

	async testCall() {
		await axios.get("https://abetta-backend.herokuapp.com/something", {
			// withCredentials: true
		});
	}
}