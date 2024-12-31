import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { saveUser } from '../utils/saveUser';
import { useNavigate } from 'react-router-dom';
const GoogleLoginButton = () => {
  const navigater = useNavigate();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleLoginSuccess = async (credentialResponse) => {
    console.log('Credential Response:', credentialResponse); // 디버깅 로그
    try {
      // Google JWT 디코딩
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Decoded JWT:', decoded); // 디코딩된 JWT 확인

      const user = {
        id: decoded.sub, // Google 사용자 ID
        name: decoded.name,
        email: decoded.email,
        profile_image: decoded.picture,
        created_at: new Date().toISOString(),
      };

      // Supabase에 사용자 상태 확인 및 저장
      const result = await saveUser(user); // user 전체 데이터 전달

      if (result.isNewUser) {
        console.log('New user registered.');
        navigater('/user/edit'); // 추가 정보 입력 페이지로 이동
      } else {
        console.log('Existing user logged in:', result.user);
        navigater('/'); // 기존 사용자 메인 대시보드로 이동
      }
    } catch (error) {
      console.error('Error during login processing:', error);
    }
  };

  const handleLoginError = () => {
    console.error('Google Login Failed!');
  };
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
