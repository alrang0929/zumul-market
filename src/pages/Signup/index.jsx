import React from 'react';
import SignUpForm from './components/SignUpForm';
import { signUpUser } from '../../api/auth/saveUsers';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigator = useNavigate();
  const handleSignUp = async (formData, navigator) => {
    const response = await signUpUser(formData);
    if (response.success) {
      alert('회원가입이 완료되었습니다!');
      // navigator('/');
    } else {
      alert(`회원가입 실패: ${response.error}`);
    }
  };
  return (
    <>
      <div
        className="signup-page"
        style={{ backgroundColor: '#F0F0F0', padding: '10rem' }}
      >
        <SignUpForm onSubmit={handleSignUp} />
      </div>
    </>
  );
};

export default SignupPage;
