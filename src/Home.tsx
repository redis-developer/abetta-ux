import { AuthenticationService } from "./services/AuthenticationService";

export function Home() {
	
  const authService = new AuthenticationService();

  const testing = async () => {
	  await authService.testCall().then(r => alert(r));
	  alert("Hey"); 
  };

  const authTest = async () => {
	await authService.authenticateWithGoogle().then(r => alert(r));
	alert("Hey");
  };	

  return (

    <div className="App">
        <header className="App-header">
        <p>
            ABetta-Me App
        </p>
        <a href="https://abetta-backend.herokuapp.com/oauth2/authorization/google">Login</a>
		<a onClick={authTest}>Login axios</a>
		<a onClick={testing}>Test</a>
        </header>
    </div>
  );
}

export default Home;
