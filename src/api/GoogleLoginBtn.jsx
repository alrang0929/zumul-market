import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { saveUser } from '../utils/saveUser';
const GoogleLoginButton = () => {
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

    // Supabase에 저장
    await saveUser(user);
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
