import { Calendar, HeartPulse, Stethoscope, Syringe, TestTube } from 'lucide-react';
import Header from './Header';
import { useUserMenu } from '../context/userMenu';
import HeroCard from './HeroCards';

const Hero = () => {
    const { isMenuOpen } = useUserMenu();

    return (
        <>
            <div className='relative h-screen '>
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
                    mt-16
                    left-0 right-0
                    flex flex-col items-start
                    gap-5
                    transition-all duration-500
                    ${
                        isMenuOpen
                            ? 'ssm:top-[22rem] xl:top-0' // Posição quando menu aberto
                            : 'top-1/2 -translate-y-1/2' // Centralizado quando menu fechado
                    }
                `}
                    >
                        <div className='flex flex-col gap-5'>
                            <h3 className='font-semibold text-primary text-xl'>Clínica Veterinária Mascotes</h3>
                            <h1 className='font-bold mt-2 ssm:w-full xl:w-[70%] ssm:text-3xl/tight xl:text-6xl/tight '>
                                Compromisso com a saúde do seu pet
                            </h1>
                            <span className='text-lg'>
                                Consultas, exames e vacinas com preços que cabem no seu bolso.
                            </span>
                        </div>

                        <button
                            type='button'
                            className='mt-4 p-4 bg-primary text-white rounded-lg flex items-center gap-4 hover:bg-primaryHover transition duration-300 drop-shadow-lg'
                        >
                            <Calendar color='#fff' /> <span className='font-medium'>Agendar sua consulta</span>
                        </button>

                        <div className='grid ssm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10'>
                            <HeroCard text='Consultas' icon={<Stethoscope size={40}/>}/>
                            <HeroCard text='Exames' icon={<TestTube size={40} />}/>
                            <HeroCard text='Cirurgias' icon={<HeartPulse size={40} />}/>
                            <HeroCard text='Vacinas' icon={<Syringe size={40} />}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
