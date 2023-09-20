import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface LoginFormProp {
    onSignUpClick: () => void
}

const loginSchema = z.object({
    email: z.string().nonempty('Valid email required').email('Valid email required'),
    password: z.string().nonempty('Valid password required')
});
type LoginData = z.infer<typeof loginSchema>; 

function LoginForm(prop: LoginFormProp) {
    const {formState: {errors}, register, handleSubmit} = useForm<LoginData>({ resolver: zodResolver(loginSchema) });

    return (
        <div className='flex flex-col items-center p-6'>
            <form className='mb-8'>
                <h1 className='text-4xl text-white mb-12'>Login</h1>
                <input 
                    className={`text-white pl-4 w-full h-14 mb-6 bg-[#161D2F] border-b`} 
                    {...register('email')} 
                    placeholder='Email address' />
                <input 
                    className={`text-white pl-4 w-full h-14 mb-6 bg-[#161D2F] border-b`} 
                    {...register('password')} 
                    type="password"
                    placeholder='Password' />
                <input 
                    className='w-full h-14 bg-[#FC4747] text-white text-base font-bold rounded-xl hover:bg-[#ffffff] hover:text-black' 
                    type="submit" 
                    value="Login to your account"/>
            </form>
            <div>
                <p className='text-white'>Don’t have an account? <a className='text-red-500' onClick={prop.onSignUpClick}>Sign Up</a></p>
            </div>
        </div>
    ); 
}

export default LoginForm;