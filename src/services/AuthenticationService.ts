import axios from 'axios';

export class AuthenticationService {

	state = {
		test: []
	  }

	async  authenticateWithGoogle() {
		await axios.get("http://localhost:8080/login", {
			withCredentials: true
		});
	}

	async testCall() {
		await axios.get("http://localhost:8080/something", {
			withCredentials: true
		});
	}

	async xpCall() {
		await axios.get("http://localhost:8080/abetta-xp/v1/experiments", {
			withCredentials: true
		});
	}
}