import { Mail, Phone } from 'lucide-react';

const Header = () => {
    return (
        <header className='bg-transparent'>
            <nav className='flex items-center px-4 py-2 justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <img src='/logo.svg' alt='Logo' width={150} />
                    </div>
                    <ul className='flex items-center gap-4'>
                        <li className='group'>
                            <a
                                href='#home'
                                className='text-white text-xl font-bold hover:text-primary transition duration-200'
                            >
                                Home
                            </a>
                            <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                        </li>
                        <li className='group'>
                            <a
                                href='#home'
                                className='text-white text-xl font-bold hover:text-primary transition duration-200'
                            >
                                Serviços
                            </a>
                            <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                        </li>
                        <li className='group'>
                            <a
                                href='#home'
                                className='text-white text-xl font-bold hover:text-primary transition duration-200'
                            >
                                Sobre nós
                            </a>
                            <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                        </li>
                        <li className='group'>
                            <a
                                href='#home'
                                className='text-white text-xl font-bold hover:text-primary transition duration-200'
                            >
                                Contato
                            </a>
                            <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-2 text-white'>
                        <Phone color='#04d16a' />
                        <p>(11) 97732-4705</p>
                    </span>
                    <button className='flex items-center gap-2 border border-gray-500 p-2 rounded-md bg-white hover:bg-gray-300 transition duration-300'>
                        <Mail color='#000' size={20} />
                        <span className='text-black text-sm'>Enviar Mensagem</span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
