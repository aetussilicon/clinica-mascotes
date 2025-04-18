import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SIgnupForm';
import SocialButton from './SocialButton';

const AuthScreen = () => {
    const [isLoginFlow, setIsLoginFlow] = useState(true);

    return (
        <div className='w-fit h-fit bg-white rounded-lg shadow-md flex flex-col gap-2 p-4 self-center'>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-xl font-bold text-primaryHover mb-5'>Bem-Vindo de volta!</h1>
                <form>
                    <div className='flex flex-col gap-2'>
                        {isLoginFlow ? <LoginForm /> : <SignupForm />}
                        <button
                            type='button'
                            className='self-center text-sm text-primary'
                            onClick={() => setIsLoginFlow(!isLoginFlow)}
                        >
                            {isLoginFlow ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entrar'}
                        </button>
                        <button
                            type='submit'
                            className='bg-primary hover:bg-primaryHover transition duration-200 text-white rounded-lg p-2 w-[350px] mt-5 font-bold'
                        >
                            {isLoginFlow ? 'Entrar' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
                <div className='flex items-center w-full my-4'>
                    <div className='h-[1px] flex-1 bg-gray-300' />
                    <span className='px-3 text-gray-500 text-sm'>ou</span>
                    <div className='h-[1px] flex-1 bg-gray-300' />
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
