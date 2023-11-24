import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "./module/nbcbase";

import { authService } from "./module/auth/nbcbaseAuth";
import { useState } from "react";

// 이 코드도 개선점이 많은 코드이나 이런식으로 바꿔갈 수 있다는 감을 잡으시면 좋을 것 같습니다.

const SOCIAL_LIST = ["google", "github"];
function App() {
  const [user, setUser] = useState({ token: "", userName: "" });

  const signInWith = async (what) => {
    let Provider;
    if (what === "google") {
      Provider = GoogleAuthProvider;
    }
    if (what === "github") {
      Provider = GithubAuthProvider;
    }

    const res = await signInWithPopup(authService, new Provider());
    const credential = Provider.credentialFromResult(res); // 사용 설명서
    const token = credential.accessToken;
    const userName = res.user.displayName;

    setUser({ token, userName });
  };

  return (
    <div>
      <h2>소셜 로그인</h2>

      {SOCIAL_LIST.map((social) => (
        <button onClick={() => signInWith(social)}>{social}로그인</button>
      ))}

      <h3>{user.token}</h3>
      <h3>{user.userName}</h3>
    </div>
  );
}

export default App;
