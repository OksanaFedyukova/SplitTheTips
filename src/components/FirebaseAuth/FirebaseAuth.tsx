// src/FirebaseAuth.tsx

import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, EmailAuthProvider, PhoneAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'; 

const FirebaseAuth: React.FC = () => {
  useEffect(() => {
    const auth = getAuth();
    const ui = new firebaseui.auth.AuthUI(auth);
    const uiConfig: firebaseui.auth.Config = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          return true;
        },
        uiShown: function () {
          const loader = document.getElementById('loader');
          if (loader) {
            loader.style.display = 'none';
          }
        },
      },
      signInFlow: 'popup',
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID,
        TwitterAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
        PhoneAuthProvider.PROVIDER_ID,
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>',
    };

    ui.start('#firebaseui-auth-container', uiConfig);

    return () => {
      ui.reset();
    };
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default FirebaseAuth;
