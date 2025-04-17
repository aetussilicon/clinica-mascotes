import { Star } from 'lucide-react';
import React from 'react';

interface TestimonialCardsProps {
    name: string;
    role: string;
    testimonial: string;
}

const TestimonialsCards: React.FC<TestimonialCardsProps> = ({ name, role, testimonial }) => {
    return (
        <div className='w-96 h-fit p-4 bg-white rounded-lg shadow-md flex flex-col gap-2'>
            <div className='flex flex-col gap-5'>
                <div className='flex space-x-1 mb-5'>
                    {[...Array(5)].map((_, index) => (
                        <Star key={index} size={20} stroke='#04d16a' fill='#04d16a' />
                    ))}
                </div>
                <p className='text-[#4b5563] text-md italic'>"{testimonial}"</p>
                <div>
                <p className='font-semibold'>{name}</p>
                <p className='text-sm text-[#4b5563] mt-1'>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCards;
