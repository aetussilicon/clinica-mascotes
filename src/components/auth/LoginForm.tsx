import { useState } from "react";

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
        remeberMe: false,
    });

    return (
        <>
            <input
                type='email'
                placeholder='Email'
                className='border rounded-lg p-2 w-[350px] outline-none'
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            />
            <input
                type='password'
                placeholder='Senha'
                className='border rounded-lg p-2 w-[350px] outline-none'
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <input
                        type='checkbox'
                        checked={loginForm.remeberMe}
                        onChange={() => setLoginForm({ ...loginForm, remeberMe: !loginForm.remeberMe })}
                    />
                    <label className='text-sm'>Lembrar-me</label>
                </div>
                <a href='/forgot-password' className='text-sm text-primary'>
                    Esqueceu a senha?
                </a>
            </div>
        </>

    );
};

export default LoginForm;