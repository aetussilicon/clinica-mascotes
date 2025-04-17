import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React, { ReactNode } from 'react';

const InfoCard: React.FC<{ icon: ReactNode; title: string; info: string }> = ({ icon, title, info }) => {
    return (
        <div className='flex flex-col text-center items-center'>
            <div className='bg-[#e5faf0] p-2 rounded-full w-fit'>{icon}</div>
            <span className='font-bold'>{title}</span>
            <p>{info}</p>
        </div>
    );
};

const AboutUsSection = () => {
    return (
        <div className=' ssm:mx-[10%] xl:mx-[20%] mb-10 flex flex-col justify-center items-center gap-10 py-10'>
            <div className='flex flex-col text-center gap-5'>
                <h1 className='text-3xl xl:text-4xl font-bold'>Nos Visite</h1>
                <p className='text-[#8894a6] ssm:text-md xl:text-xl'>
                    Aqui podemos cuidar do seu pet com todo carinho e atenção que ele merece.
                </p>
            </div>
            <div className='flex ssm:flex-col md:flex-row justify-between items-center w-full'>
                <InfoCard
                    icon={<MapPin color='#04d16a' size={28} />}
                    title='Endereço'
                    info='Rua Brácara, 162 - Jardim Iae, São Paulo - SP, 05890-020'
                />
                <InfoCard icon={<Phone color='#04d16a' size={28} />} title='Contato' info='11) 97732-4705' />
                <InfoCard
                    icon={<Mail color='#04d16a' size={28} />}
                    title='Email'
                    info='clinicapetmascotes2@hotmail.com'
                />
                <InfoCard icon={<Clock color='#04d16a' size={28} />} title='Horário' info='Seg-Sab: 9h às 18h' />
            </div>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.239894037161!2d-46.78755002419532!3d-23.66737756549653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53a3c08a815f%3A0xe2f2eac47549344c!2sCl%C3%ADnica%20Veterin%C3%A1ria%20e%20Pet%20Shop%20Mascotes!5e0!3m2!1spt-BR!2sbr!4v1744863256768!5m2!1spt-BR!2sbr'
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                    allowFullScreen={false}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>
        </div>
    );
};

export default AboutUsSection;
