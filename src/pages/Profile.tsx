import { Camera, PawPrint, PencilLine, ShoppingBag, User, UserIcon } from 'lucide-react';
import Layout from '../components/Layout';
import UserInfo from '../components/profile/UserInfo';
import { useState } from 'react';
import PetsInfo from '../components/profile/PetsInfo';

export function Profile() {
    const [page, setPage] = useState<number>(0);

    const user = {
        fullName: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '(11) 99999-9999',
        address: {
            state: 'São Paulo',
            city: 'São Paulo',
            district: 'Jd. Irapiranga',
            street: 'Rua das Flores',
            number: '123',
            postalCode: '12345-678',
            complement: 'Apto 101',
        },
        cpf: '123.456.789-00',
        birthDate: '01/01/1990',
        rg: '12.345.678-9',
    };

    return (
        <Layout>
            <div className='flex items-center justify-center min-h-screen p-4'>
                <div className='flex flex-col gap-4 w-full max-w-6xl'>
                    <h1 className='text-2xl md:text-3xl font-bold text-center md:text-left'>Meu Perfil</h1>
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='flex flex-col items-center border-2 p-6 rounded-lg gap-4 w-full lg:w-1/3 h-fit'>
                            <div className='relative cursor-pointer'>
                                <img
                                    src='profile-placeholder.jpg'
                                    alt='Profile'
                                    className='rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-primaryHover'
                                />
                                <div className='absolute bg-primary p-1 rounded-full text-white bottom-2 right-1'>
                                    <Camera size={20} />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-lg md:text-xl font-bold'>{user.fullName}</h1>
                                <p className='text-sm md:text-lg text-gray-600'>{user.email}</p>
                            </div>
                            <button className='border border-primary text-primary rounded-md w-full py-2 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition'>
                                <PencilLine className='w-5 h-5 mr-2' />
                                <span>Editar perfil</span>
                            </button>
                        </div>
                        <div className='w-full lg:w-2/3'>
                            <div className='bg-[#f1f5f9] py-2 rounded-lg flex items-center justify-center gap-4 flex-wrap'>
                                {['Informações', 'Pedidos', 'Meus Pets'].map((text, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setPage(index)}
                                        type='button'
                                        className={`flex items-center gap-2 px-4 py-1 rounded-md transition ${
                                            page === index ? 'bg-gray-300' : 'hover:bg-gray-200'
                                        }`}
                                    >
                                        {text === 'Informações' && <PencilLine className='w-5 h-5' />}
                                        {text === 'Pedidos' && <ShoppingBag className='w-5 h-5' />}
                                        {text === 'Meus Pets' && <PawPrint className='w-5 h-5' />}
                                        <span className='text-sm font-medium'>{text}</span>
                                    </button>
                                ))}
                            </div>
                            <div className='border border-gray-300 rounded-lg p-4 mt-4 flex flex-col gap-4'>
                                {page === 0 && (
                                    <>
                                        <h1 className='flex gap-2 text-xl md:text-2xl font-bold items-center text-primary'>
                                            <User size={24} />
                                            Dados pessoais
                                        </h1>
                                        <UserInfo user={user} />
                                    </>
                                )}
                                {page === 2 && <PetsInfo />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
