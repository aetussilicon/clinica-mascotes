import { Mail } from 'lucide-react';
import Hamburger from './Hamburger';
import { useUserMenu } from '../context/userMenu';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Header: React.FC<{ setBg: boolean }> = ({ setBg = false }) => {
    const { isMenuOpen } = useUserMenu();

    const styles = {
        text: `text-white text-xl font-bold hover:text-primary transition duration-200`,
    };

    const UlMobile = () => {
        const variants = {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
        };

        return (
            <motion.div
                className={`mt-24 `}
                initial='initial'
                animate='animate'
                exit='exit'
                variants={variants}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <ul className={`flex items-center gap-4 ssm:flex-col lg:flex-row`}>
                    <li className='group'>
                        <a href='#home' className={styles.text}>
                            Home
                        </a>
                        <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
                    </li>
                    <li className='group'>
                        <a href='#home' className={styles.text}>
                            Serviços
                        </a>
                        <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
                    </li>
                    <li className='group'>
                        <a href='#home' className={styles.text}>
                            Sobre nós
                        </a>
                        <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                    </li>
                    <li className='group'>
                        <a href='#home' className={styles.text}>
                            Contato
                        </a>
                        <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                    </li>
                </ul>
                <div className='flex items-center gap-4 ssm:flex-col lg:flex-row mt-4'>
                    <button
                        type='button'
                        onClick={() => (window.location.href = '/auth')}
                        className={`border py-2 px-4 w-full rounded-md text-sm text-white hover:text-black ${setBg ? 'hover:bg-white' : 'hover:bg-primary hover:border-primary'} transition duration-300`}
                    >
                        Entrar
                    </button>
                    <button className='flex items-center gap-2 border border-gray-500 p-2 rounded-md bg-white hover:bg-gray-300 transition duration-300'>
                        <Mail color='#000' size={20} />
                        <span className='text-black text-sm'>Enviar Mensagem</span>
                    </button>
                </div>
            </motion.div>
        );
    };

    return (
        <motion.header
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`w-full overflow-hidden min-h-[83px] transition-colors duration-500 ${
                setBg ? 'bg-emerald-500' : 'bg-transparent'
            }`}
        >
            <nav className='ssm:mx-[10%] xl:mx-[20%] relative flex items-center px-4 py-2 justify-between ssm:flex-col lg:flex-row'>
                <div className='flex items-center gap-4 xl:justify-between'>
                    <div className='flex items-center justify-between '>
                        <img
                            src='/logo.svg'
                            alt='Logo'
                            width={150}
                            className={`
                                ssm:absolute ssm:-left-10 ssm:top-2 ssm:ml-0 ssm:mt-0
                                xl:static xl:ml-0 xl:mt-0
                            `}
                            style={{ zIndex: 30 }}
                        />
                        <div
                            className='ssm:block lg:hidden ssm:absolute ssm:-right-10 ssm:top-4 ssm:mr-0 ssm:mt-0 xl:static xl:mr-0 xl:mt-0'
                            style={{ zIndex: 30 }}
                        >
                            <Hamburger />
                        </div>
                    </div>
                    <AnimatePresence initial={false}>
                        {isMenuOpen && (
                            <motion.div
                                key='mobile-menu'
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className='overflow-hidden mb-5 xl:hidden ssm:block'
                            >
                                <UlMobile />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className={`hidden xl:block xl:z-10 `}>
                    <div className='flex '>
                        <ul className={`flex items-center gap-4 ssm:flex-col lg:flex-row mr-32`}>
                            <li className='group'>
                                <a href='#home' className={styles.text}>
                                    Home
                                </a>
                                <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
                            </li>
                            <li className='group'>
                                <a href='#home' className={styles.text}>
                                    Serviços
                                </a>
                                <div className='bg-primary transition-all duration-300 ease-in-out h-1 w-0 group-hover:w-full' />
                            </li>
                            <li className='group'>
                                <a href='#home' className={styles.text}>
                                    Sobre nós
                                </a>
                                <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                            </li>
                            <li className='group'>
                                <a href='#home' className={styles.text}>
                                    Contato
                                </a>
                                <div className='w-0 bg-primary transition-all duration-300 ease-in-out h-1 group-hover:w-full' />
                            </li>
                        </ul>
                        <div className='flex items-center gap-4 ssm:flex-col lg:flex-row'>
                            <button
                                type='button'
                                onClick={() => (window.location.href = '/auth')}
                                className={`border py-2 px-4 rounded-md text-white hover:text-black text-sm ${setBg ? 'hover:bg-white' : 'hover:bg-primary hover:border-primary'} transition duration-300`}
                            >
                                Entrar
                            </button>
                            <button className='flex items-center gap-2 border border-gray-500 p-2 rounded-md bg-white hover:bg-gray-300 transition duration-300'>
                                <Mail color='#000' size={20} />
                                <span className='text-black text-sm'>Enviar Mensagem</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
