import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { saveUser } from '../utils/saveUser';
import { useNavigate } from 'react-router-dom';
const GoogleLoginButton = () => {
  const nav = useNavigate();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const handleLoginSuccess = async (credentialResponse) => {
    console.log('Google Login Success!', credentialResponse);

    // JWT 디코딩
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Decoded User Info:', decoded);

    // supabase 저장
    // 유저 데이터 준비
    const user = {
      name: decoded.name,
      email: decoded.email,
      profileImage: decoded.picture,
    };

    try {
      const result = await saveUser(user);
      if (!result) {
        throw new Error('saveUser did not return any result.');
      }
      if (result.isNewUser) {
        console.log('New user registered successfully:', result.user);
        nav('/signup');
      } else {
        console.log('Existing user logged in:', result.user);
        nav('/home');
      }
    } catch (error) {
      console.error('An error occurred during user processing:', error);
    }
    // Supabase에 저장
  };

  const handleLoginError = () => {
    console.error('Google Login Failed!');
  };
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginError}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
