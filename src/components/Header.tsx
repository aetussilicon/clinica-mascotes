import { Mail, Phone } from 'lucide-react';
import Hamburger from './Hamburger';
import { useUserMenu } from '../context/userMenu';
import { motion } from 'framer-motion';

const Header = () => {
    const { isMenuOpen } = useUserMenu();

    const UlMobile = () => {
        const variants = {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
        };

        return (
            <motion.div
                className='mt-24'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <ul className={`flex items-center gap-4 ssm:flex-col lg:flex-row`}>
                    <li className='group'>
                        <a
                            href='#home'
                            className='text-white text-xl font-bold hover:text-primary transition duration-200'
                        >
                            Home
                        </a>
                        <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
                    </li>
                    <li className='group'>
                        <a
                            href='#home'
                            className='text-white text-xl font-bold hover:text-primary transition duration-200'
                        >
                            Serviços
                        </a>
                        <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
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
                <div className='flex items-center gap-4 ssm:flex-col lg:flex-row mt-4'>
                    <span className='flex items-center gap-2 text-white'>
                        <Phone color='#04d16a' />
                        <p>(11) 97732-4705</p>
                    </span>
                    <button className='flex items-center gap-2 border border-gray-500 p-2 rounded-md bg-white hover:bg-gray-300 transition duration-300'>
                        <Mail color='#000' size={20} />
                        <span className='text-black text-sm'>Enviar Mensagem</span>
                    </button>
                </div>
            </motion.div>
        );
    };

    return (
        <header className='bg-transparent'>
            <nav className='relative flex items-center px-4 py-2 justify-between ssm:flex-col lg:flex-row'>
                <div className='flex items-center gap-4 xl:justify-between'>
                    <div className='flex items-center justify-between '>
                        <img
                            src='/logo.svg'
                            alt='Logo'
                            width={150}
                            className={`
                                ssm:fixed ssm:left-2 ssm:top-2 ssm:ml-0 ssm:mt-0
                                xl:static xl:ml-0 xl:mt-0
                            `}
                            style={{ zIndex: 30 }}
                        />
                        <div
                            className='ssm:block lg:hidden ssm:fixed ssm:right-2 ssm:top-2 ssm:mr-0 ssm:mt-0 xl:static xl:mr-0 xl:mt-0'
                            style={{ zIndex: 30 }}
                        >
                            <Hamburger />
                        </div>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} xl:hidden`}>
                        <UlMobile />
                    </div>
                </div>
                <div className={`hidden xl:block xl:z-10 `}>
                    <div className='flex '>
                        <ul className={`flex items-center gap-4 ssm:flex-col lg:flex-row mr-20`}>
                            <li className='group'>
                                <a
                                    href='#home'
                                    className='text-white text-xl font-bold hover:text-primary transition duration-200'
                                >
                                    Home
                                </a>
                                <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
                            </li>
                            <li className='group'>
                                <a
                                    href='#home'
                                    className='text-white text-xl font-bold hover:text-primary transition duration-200'
                                >
                                    Serviços
                                </a>
                                <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
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
                        <div className='flex items-center gap-4 ssm:flex-col lg:flex-row'>
                            <span className='flex items-center gap-2 text-white'>
                                <Phone color='#04d16a' />
                                <p>(11) 97732-4705</p>
                            </span>
                            <button className='flex items-center gap-2 border border-gray-500 p-2 rounded-md bg-white hover:bg-gray-300 transition duration-300'>
                                <Mail color='#000' size={20} />
                                <span className='text-black text-sm'>Enviar Mensagem</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
