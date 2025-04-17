import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-[#f2fce2] text-black py-4'>
            <div className='md:px-[10%] xl:px-[20%]'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4'>
                <div className='flex flex-col gap-6'>
                    <img src='logo.svg' alt='Logo' width={100} />
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-2'>
                            <MapPin color='#04d16a' size={22} />
                            <p>Rua Brácara, 162 - Jardim Iae, São Paulo </p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Phone color='#04d16a' size={22} />
                            <p>(11) 97732-4705</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Mail color='#04d16a' size={22} />
                            <p>clinicapetmascotes2@hotmail.com</p>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-lg font-bold text-primary text-left'>Links Rápidos</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-2'>
                            <a href='/' className='hover:text-primary'>
                                Início
                            </a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <a href='/about-us' className='hover:text-primary'>
                                Serviços
                            </a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <a href='/contact' className='hover:text-primary'>
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4'>
                    <h3 className='text-lg font-bold text-primary text-left'>Nossos Serviços</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex items-center gap-2'>Consultas</li>
                        <li className='flex items-center gap-2'>Exames</li>
                        <li className='flex items-center gap-2'>Cirurgias</li>
                        <li className='flex items-center gap-2'>Vacinas</li>
                    </ul>
                </div>
            </div>
            
            <div className='border-t border-gray-300 mt-8 pt-4 text-center'>
                <p className='text-sm'>
                &copy; {new Date().getFullYear()} Clínica Pet Mascotes. Todos os direitos reservados.
                </p>
                <p className='text-sm mt-1'>
                Desenvolvido por <a href="https://github.com/aetussilicon" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Vega</a>
                </p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
