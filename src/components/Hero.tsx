import { Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <div className='relative h-screen overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-screen overflow-hidden'>
                    <video autoPlay loop muted className='object-cover w-full h-full'>
                        <source src='/videos/dog-bg.mp4' type='video/mp4' />
                    </video>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20'></div>
                </div>
                <div className='mx-[20%] h-screen absolute text-white z-30'>
                    <div className='mx-auto  flex flex-col items-start justify-center h-full gap-5'>
                        <div className='flex flex-col gap-5'>
                        <h3 className='font-semibold text-primary text-xl'>Clínica Veterinária Mascotes</h3>
                        <h1 className='text-6xl/tight font-bold mt-2 w-[70%] '>Compromisso com a saúde do seu pet</h1>
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