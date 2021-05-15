import { AuthenticationService } from "./services/AuthenticationService";
import Lottie from "react-lottie";
import animationData from "./lottie/welcome.json";

export function Home() {
  const authService = new AuthenticationService();

  const testing = async () => {
    await authService.xpCall();
    alert("Hey");
  };

  const authTest = async () => {
    await authService.authenticateWithGoogle();
    alert("Hey");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="container block">
      <div>
        <Lottie
          options={defaultOptions}
          height={320}
          width={350}
          isClickToPauseDisabled={true}
        />
      </div>

      <div className="App">
        <header className="App-header">
          <p>ABetta-Me App</p>
          <a href="http://localhost:8080/login">Login</a>
          <a onClick={authTest}>Login axios</a>
          <a onClick={testing}>Test</a>
        </header>
      </div>
    </div>
  );
}

export default Home;
