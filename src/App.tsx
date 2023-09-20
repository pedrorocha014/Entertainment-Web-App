import { useState } from 'react';
import logo from '../src/assets/logo.svg';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  const [signUpForm, setSignUpForm] = useState(false);

  const changeFormState = () => {
    setSignUpForm(!signUpForm);
  }

  return (
    <div className="bg-[#10141E] absolute w-full h-full flex flex-col items-center">
      <div className='mt-12'>
        <img src={logo} alt="Movie Logo" />
      </div>
      <div className="bg-[#161D2F] max-w-sm h-1/2 rounded-2xl mt-12">
        {signUpForm ? <SignUpForm onLoginClick={changeFormState}/> : <LoginForm onSignUpClick={changeFormState}/>}
      </div>
    </div>
  );
}

export default App;
