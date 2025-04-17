import React, { useState } from 'react';

const AuthScreen = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
        remeberMe: false
    });

    interface SocialButtonProps {
        provider: 'google' | 'outlook' | 'facebook';
        onClick?: () => void;
    }

    const SocialButton: React.FC<SocialButtonProps> = ({ provider, onClick }) => {
        const providerInfo = {
            google: {
                icon: 'icons/google.svg',
                text: 'Continuar com o Google',
            },
            outlook: {
                icon: 'icons/outlook.svg',
                text: 'Continuar com o Outlook',
            },
            facebook: {
                icon: 'icons/facebook.svg',
                text: 'Continuar com o Facebook',
            },
        };

        const { icon, text } = providerInfo[provider];

        return (
            <div>
                <button
                    type='button'
                    className='relative py-2 w-[350px] text-center border rounded-lg cursor-pointer hover:bg-lime-50 transition duration-200'
                    onClick={onClick}
                >
                    <img src={icon} alt={provider} width={25} className='absolute left-4 top-2' />
                    <span className='text-mg'>{text}</span>
                </button>
            </div>
        );
    };

    return (
        <div className='w-fit h-fit bg-white rounded-lg shadow-md flex flex-col gap-2 p-4 self-center'>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-xl font-bold text-primaryHover mb-5'>Bem-Vindo de volta!</h1>
                <form>
                    <div className='flex flex-col gap-2'>
            
                        <input
                            type='email'
                            placeholder='Email'
                            className='border rounded-lg p-2 w-[350px] outline-none'
                            value={loginForm.email}
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        />
                        <input
                            type='password'
                            placeholder='Senha'
                            className='border rounded-lg p-2 w-[350px] outline-none'
                            value={loginForm.password}
                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        />
                        <div className='flex items-center gap-2'>
                            <input
                                type='checkbox'
                                checked={loginForm.remeberMe}
                                onChange={() => setLoginForm({...loginForm, remeberMe: !loginForm.remeberMe})}
                            />
                            <label className='text-sm'>Lembrar-me</label>
                        </div>
                        <button
                            type='submit'
                            className='bg-primary hover:bg-primaryHover transition duration-200 text-white rounded-lg p-2 w-[350px] mt-5'
                        >
                            Entrar
                        </button>
                    </div>
                </form>
                <div className='flex items-center w-full my-4'>
                    <div className='h-[1px] flex-1 bg-gray-300'/>
                    <span className='px-3 text-gray-500 text-sm'>ou</span>
                    <div className='h-[1px] flex-1 bg-gray-300'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <SocialButton provider='google' />
                    <SocialButton provider='outlook' />
                    <SocialButton provider='facebook' />
                </div>
            </div>
        </div>
    );
};

export default AuthScreen;
