import { Calendar } from 'lucide-react';
import Header from './Header';
import { useUserMenu } from '../context/userMenu';

const Hero = () => {
    
    const {isMenuOpen} = useUserMenu();

    return (
        <>
            <div className='relative h-screen overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-screen overflow-hidden'>
                    <video autoPlay loop muted className='object-cover w-full h-full'>
                        <source src='/videos/dog-bg.mp4' type='video/mp4' />
                    </video>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                </div>
               
                <div className=' absolute inset-0 text-white z-30 ssm:mx-[10%] xl:mx-[20%]'>
                <Header />
                    <div
                     className={`
                        absolute
                        ssm:top-[21rem] xl:top-0 
                        left-0 right-0 bottom-0
                        flex flex-col items-start
                        gap-5 xl:justify-center
                        transition-all duration-500
                      `}
                      style={{ transform: isMenuOpen ? 'translateY(60px)' : 'translateY(0)' }}
                    >
                        <div className='flex flex-col gap-5'>
                            <h3 className='font-semibold text-primary text-xl'>Clínica Veterinária Mascotes</h3>
                            <h1 className='font-bold mt-2 ssm:w-full xl:w-[70%] ssm:text-3xl/tight xl:text-6xl/tight '>Compromisso com a saúde do seu pet</h1>
                            <span className='text-lg'>Consultas, exames e vacinas com preços que cabem no seu bolso.</span>
                        </div>

                        <button
                            type='button'
                            className='mt-4 p-4 bg-primary text-white rounded-lg flex items-center gap-4 hover:bg-primaryHover transition duration-300 drop-shadow-lg'
                        >
                            <Calendar color='#fff' /> <span className='font-medium'>Agendar sua consulta</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;