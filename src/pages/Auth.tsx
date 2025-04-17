import AuthScreen from '../components/auth/AuthScreen';
import Header from '../components/Header';

export function Auth() {
    return (
        <div className='flex flex-col ssm:mx-[10%] xl:mx-[20%]'>
            <Header setBlackText={true} />
            <AuthScreen />
        </div>
    );
}
