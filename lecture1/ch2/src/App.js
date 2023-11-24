import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "./module/nbcbase";

import { authService } from "./module/auth/nbcbaseAuth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ token: "", userName: "" });

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(authService, googleProvider);
  };

  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(authService, githubProvider);
  };

  const socialGoogleLoginhandler = async (event) => {
    event.preventDefault();
    await signInWithGoogle()
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const userName = res.user.displayName;

        setUser({ token, userName });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const socialGithubLoginhandler = async (event) => {
    event.preventDefault();
    await signInWithGithub()
      .then((res) => {
        const credential = GithubAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const userName = res.user.displayName;

        setUser({ token, userName });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>소셜 로그인</h2>

      <form method="post">
        <br />
        <button onClick={socialGoogleLoginhandler}>구글로그인</button>
        <button onClick={socialGithubLoginhandler}>깃허브로그인</button>
      </form>
      <h3>{user.token}</h3>
      <h3>{user.userName}</h3>
    </div>
  );
}

export default App;
