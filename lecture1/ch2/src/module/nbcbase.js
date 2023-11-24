class AuthProvider {
  constructor() {}
  static credentialFromResult(res) {
    throw new Error("not use default Provider");
  }

  get user() {
    throw new Error("not use default Provider");
  }
}

export class GoogleAuthProvider extends AuthProvider {
  static credentialFromResult(res) {
    return {
      accessToken: `google Token`,
    };
  }

  get user() {
    return {
      id: "google",
      displayName: "googleUser",
    };
  }
}

export class GithubAuthProvider extends AuthProvider {
  static credentialFromResult(res) {
    return {
      accessToken: `github Token`,
    };
  }
  get user() {
    return {
      id: "github",
      displayName: "githubUser",
    };
  }
}

export class FacebookAuthProvider extends AuthProvider {
  static credentialFromResult(res) {
    return {
      accessToken: `facebook Token`,
    };
  }

  get user() {
    return {
      id: "facebook",
      displayName: "facebookUser",
    };
  }
}

export class KakaoAuthProvider extends AuthProvider {
  static credentialFromResult(res) {
    return {
      accessToken: `facebook Token`,
    };
  }
  get user() {
    return {
      id: "facebook",
      displayName: "facebookUser",
    };
  }
}

export const signInWithPopup = async (auth, provider) => {
  return new Promise((res) => res(provider));
};
