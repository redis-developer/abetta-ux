import axios from 'axios';

export class AuthenticationService {

	state = {
		test: []
	  }

	async  authenticateWithGoogle() {
		await axios.get("http://localhost:8080/oauth2/authorization/google", {
			withCredentials: true
		});
	}

	async testCall() {
		await axios.get("http://localhost:8080/something", {
			withCredentials: true
		});
	}
}