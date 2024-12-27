import React from "react";
import SignUpForm from "./components/SignUpForm";
import { saveUser } from "../../api/users/saveUsers";

const SignupPage = () => {
  const handleSignUp = async (formData) => {
   await saveUser(formData);

  };
  return (<>
   <div
      className="signup-page"
      style={{ backgroundColor: '#F0F0F0', padding: '10rem' }}
    >
      <SignUpForm onSubmit={handleSignUp} />
      
    </div>
  </>);
};

export default SignupPage;
