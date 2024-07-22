// import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
// import { useRouter } from 'next/router';
// import jwt_decode from 'jwt-decode';

// const GoogleLoginButton: React.FC = () => {
//   const router = useRouter();

//   const handleGoogleLoginSuccess = (response: CredentialResponse) => {
//     if (response.credential) {
//       const decoded: any = jwt_decode(response.credential);
//       console.log("Google login successful:", decoded);
//       localStorage.setItem("token", response.credential);
//       router.push("/dashboard"); 
//     }
//   };

//   const handleGoogleLoginFailure = () => {
//     console.error("Google login failed");
//   };

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <GoogleLogin
//         onSuccess={handleGoogleLoginSuccess}
//         onError={handleGoogleLoginFailure}  
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleLoginButton;
