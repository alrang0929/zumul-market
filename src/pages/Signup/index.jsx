import React from 'react';
import SignUpForm from './components/SignUpForm';
import { saveUser } from '../../api/auth/saveUsers';

const SignupPage = () => {
  // 리엑트 쿼리 수장하는 부분분
  const handleSignUp = async (formData) => {
    await saveUser(formData);
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
