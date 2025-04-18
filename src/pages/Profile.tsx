import { Camera, PencilLine } from 'lucide-react';
import Layout from '../components/Layout';

export function Profile() {
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
            complement: 'Apto 101',
        },
        cpf: '123.456.789-00',
        birthDate: '01/01/1990',
        rg: '12.345.678-9',
    };

    return (
        <Layout>
            <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold'>Meu Perfil</h1>
                    <div className='flex flex-col min-w-[22rem] items-center border-2 p-6 rounded-lg gap-4'>
                        <div className='relative cursor-pointer'>
                            <img
                                src='profile-placeholder.jpg'
                                alt='Profile'
                                className='rounded-full w-32 h-32 border-4 border-primaryHover'
                            />
                            <div className='absolute bg-primary p-1 rounded-full text-white bottom-2 right-1'>
                                <Camera size={22} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold'>{user.fullName}</h1>
                            <p className='text-lg text-gray-600'>{user.email}</p>
                        </div>
                        <button className='border border-primary text-primary rounded-md w-full py-2 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition'>
                            <PencilLine className='w-5 h-5 mr-2' /> 
                            <span>Editar perfil</span>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
