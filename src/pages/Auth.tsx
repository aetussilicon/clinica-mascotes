import AuthScreen from '../components/auth/AuthScreen';
import Header from '../components/Header';

export function Auth() {
    return (
        <div className='bg-[#f5fdf8]'>
            <div className='ssm:mx-[10%] xl:mx-[20%]]'>
                <div className='flex flex-col h-screen justify-center items-center'>
                    <AuthScreen />
                </div>
            </div>
        </div>
    );
}
