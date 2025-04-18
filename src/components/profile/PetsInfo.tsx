import { PawPrint } from 'lucide-react';
import { useState } from 'react';

const PetsInfo = () => {
    const pets = [
        {
            id: 1,
            name: 'Rex',
            type: 'Dog',
            breed: 'Labrador',
            age: 3,
            birthDate: '2022-03-10',
            gender: 'Macho',
            neutered: true,
            color: 'Preto',
        },
        {
            id: 2,
            name: 'Mittens',
            type: 'Cat',
            breed: 'Persa',
            age: 2,
            birthDate: '2023-01-20',
            gender: 'Fêmea',
            neutered: false,
            color: 'Preto',
        },
    ];

    const [expandedCards, setExpandedCards] = useState({});

    const toggleDetails = (id) => {
        setExpandedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold text-primary flex gap-2 items-center'><PawPrint size={28} /><span>Meus Pets</span></h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {pets.map((pet) => (
                <div 
                key={pet.id} 
                className='border rounded-lg p-4 flex flex-col gap-2 shadow-md transform transition-transform hover:scale-105'
                >
                <img 
                    src={pet.type === 'Dog' ? '/dog.jpg' : '/cat.jpg'} 
                    alt={pet.name} 
                    className='w-24 h-24 rounded-full object-cover mx-auto' 
                />
                <h2 className='text-xl font-semibold text-center'>{pet.name}</h2>
                <p><strong>Raça:</strong> {pet.breed}</p>
                <p><strong>Idade:</strong> {pet.age} anos</p>

                <button 
                    className='flex items-center gap-2 text-primary mt-2'
                    onClick={() => toggleDetails(pet.id)}
                >
                    <span>{expandedCards[pet.id] ? 'Ocultar detalhes' : 'Mostrar mais'}</span>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`w-4 h-4 transform transition-transform ${expandedCards[pet.id] ? 'rotate-180' : ''}`}
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                    />
                    </svg>
                </button>

                {expandedCards[pet.id] && (
                    <div className='mt-2 space-y-1'>
                    <p><strong>Nascimento:</strong> {pet.birthDate}</p>
                    <p><strong>Gênero:</strong> {pet.gender}</p>
                    <p><strong>Castrado:</strong> {pet.neutered ? 'Sim' : 'Não'}</p>
                    <p><strong>Raça:</strong> {pet.breed}</p>
                    <p><strong>Cor do pelo:</strong> {pet.color}</p>
                    </div>
                )}

                <button 
                    className='mt-3 px-4 py-2 bg-secondary text-black border border-primary rounded hover:bg-primaryHover hover:text-white transition duration-300'
                    onClick={() => alert(`Editar informações de ${pet.name}`)}
                >
                    Editar
                </button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default PetsInfo;
