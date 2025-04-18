import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignupForm = () => {
    const [signupForm, setSignupForm] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <input
                type='text'
                placeholder='Nome completo'
                className='border rounded-lg p-2 w-[350px] outline-none'
                value={signupForm.fullName}
                onChange={(e) => setSignupForm({ ...signupForm, fullName: e.target.value })}
            />
            <input
                type='email'
                placeholder='Email'
                className='border rounded-lg p-2 w-[350px] outline-none'
                value={signupForm.email}
                onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
            />
            <div className='relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha'
                    className='border rounded-lg p-2 w-[350px] outline-none'
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                />
                <button
                    type='button'
                    className='absolute right-3 top-2.5 text-gray-500'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>
            <div className='relative'>
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Senha'
                    className='border rounded-lg p-2 w-[350px] outline-none'
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                />
                <button
                    type='button'
                    className='absolute right-3 top-2.5 text-gray-500'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>
        </>
    );
};

export default SignupForm;
