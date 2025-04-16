import React from 'react';

interface HeroCardProps {
    text: string;
    icon: React.ReactNode;
}

const HeroCard: React.FC<HeroCardProps> = ({text, icon }) => {
    return (
        <div className="bg-white/10 border border-white/30 text-white px-4 py-2 justify-center lg:h-32 lg:w-52 xl:h-40 xl:w-52 rounded-xl backdrop-blur-md hover:bg-white/20 transition duration-200 flex flex-col gap-2 items-center ">
            {icon}
            <span className='ssm:text-2xl'>{text}</span>
        </div>
    );
}

export default HeroCard;