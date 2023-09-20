import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

interface LoginFormProp {
    onSignUpClick: () => void
}

const loginSchema = z.object({
    email: z.string().nonempty('Can’t be empty').email('Valid email required'),
    password: z.string().nonempty('Can’t be empty')
});
type LoginData = z.infer<typeof loginSchema>; 

function LoginForm(prop: LoginFormProp) {
    const {formState: { errors }, register, handleSubmit} = useForm<LoginData>({ resolver: zodResolver(loginSchema) });

    const onSubmit = () => console.log(errors);

    return (
        <div className='flex flex-col items-center p-6'>
            <form className='mb-8' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-4xl text-white mb-12'>Login</h1>

                {errors.email && <span className='float-right text-[#FF6155] text-xs font-bold'>{errors.email.message}</span>}
                <input 
                    className={`text-white pl-4 w-full h-14 mb-6 bg-[#161D2F] border-b ${errors.email && 'border-b-red-500'}`} 
                    {...register('email')} 
                    placeholder='Email address' />

                {errors.password && <span className='float-right text-[#FF6155] text-xs font-bold'>{errors.password.message}</span>}
                <input 
                    className={`text-white pl-4 w-full h-14 mb-6 bg-[#161D2F] border-b ${errors.email && 'border-b-red-500'}`} 
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