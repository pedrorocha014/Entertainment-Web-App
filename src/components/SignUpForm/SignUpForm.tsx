import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface SignUpFormProp {
    onLoginClick():void
}

const signUpSchema = z.object({
    email: z.string().nonempty('Valid email required').email('Valid email required'),
    password: z.string().nonempty('Valid password required'),
    confirmPassword: z.string().nonempty('Valid password required')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

type SignUpSchemaData = z.infer<typeof signUpSchema>;

function SignUpForm(prop: SignUpFormProp) {
    const {handleSubmit, register, formState: {errors}} = useForm<SignUpSchemaData>({ resolver: zodResolver(signUpSchema) })

    return (
        <div className="flex flex-col items-center p-6">
            <form className='mb-6'>
                <h1 className='text-4xl text-white mb-12'>Sign Up</h1>
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
                    className={`text-white pl-4 w-full h-14 mb-6 bg-[#161D2F] border-b`} 
                    {...register('confirmPassword')} 
                    type="password"
                    placeholder='Repeat Password' />
                <input 
                    className='w-full h-14 bg-[#FC4747] text-white text-base font-bold rounded-xl hover:bg-[#ffffff] hover:text-black' 
                    type="submit" 
                    value="Create an account"/>
            </form>
            <div>
                <p className='text-white'>Alread have an account? <a className='text-red-500' onClick={prop.onLoginClick}>Login</a></p>
            </div>
        </div>
    );
}

export default SignUpForm;