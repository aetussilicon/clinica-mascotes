import { Bath, Scissors, ShieldPlus, Stethoscope } from 'lucide-react';
import ServicesCard from './ServicesCard';

const ServicesSection = () => {
    return (
        <div className='ssm:mx-[10%] xl:mx-[20%] mb-10 flex flex-col gap-10 py-10'>
            <div className='flex flex-col text-center gap-5'>
                <h1 className='text-3xl xl:text-4xl font-bold'>Serviços</h1>
                <p className='text-[#8894a6] ssm:text-md xl:text-xl'>
                    Atendimento veterinário especializado e cuidados de beleza para manter seu animal saudável e
                    impecável.
                </p>
            </div>
            <div className='grid ssm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ssm:gap-5 md:gap-10 '>
                <ServicesCard
                    icon={<Stethoscope size={35} color='#04d16a' />}
                    title='Cuidados Veterinários'
                    description='Check-ups completos, vacinação e tratamentos para todos os pets'
                />
                <ServicesCard
                    icon={<Bath size={35} color='#04d16a' />}
                    title='Estética Animal'
                    description='Banho, tosa e cuidados especiais para deixar seu pet impecável.'
                />
                <ServicesCard
                    icon={<ShieldPlus size={35} color='#04d16a' />}
                    title='Emergências Pet'
                    description='Cuidados urgentes e especializados quando seu pet mais precisa.'
                />
                <ServicesCard
                    icon={<Scissors size={35} color='#04d16a' />}
                    title='Cuidados Personalizados'
                    description='Atenção individualizada para animais que exigem necessidades especiais.'
                />
            </div>
        </div>
    );
};

export default ServicesSection;
