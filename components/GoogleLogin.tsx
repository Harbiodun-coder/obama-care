
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';

const GoogleLoginComponent: React.FC = () => {
  const handleSuccess = (response: CredentialResponse) => {
    console.log('Login Success:', response);
  };

  const handleError = () => {
    console.error('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId="38580842958-kcatuentt22iafhkfucp44l43l3dnp5p.apps.googleusercontent.com">
      
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
