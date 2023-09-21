import logo from '../../assets/logo.svg';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { useState } from 'react';

function AccessPage() {
    const [signUpForm, setSignUpForm] = useState(false);

    const changeFormState = () => {
      setSignUpForm(!signUpForm);
    }

    return (
        <div className='bg-[#10141E] absolute w-full h-full flex flex-col items-center'>
            <div className='mt-12'>
                <img src={logo} alt="App Logo" />
            </div>
            <div className="bg-[#161D2F] max-w-sm max-h-sm rounded-2xl mt-12">
                {signUpForm ? <SignUpForm onLoginClick={changeFormState}/> : <LoginForm onSignUpClick={changeFormState}/>}
            </div>
        </div>
    );
}

export default AccessPage;