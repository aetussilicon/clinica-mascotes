import React from "react";

const ServicesCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({icon, title, description}) => {
    return (
        <div className="bg-[#fff] drop-shadow-xl flex flex-col gap-5 p-6 ssm:w-full md:w-[380px] xl:w-[280px] rounded-lg border border-gray-200 transition duration-300 hover:scale-105">
            <div className="bg-[#e5faf0] w-fit p-3 rounded-lg" >
                {icon}
            </div>
            <div>
                <h1 className="text-xl font-bold mb-5 cursor-default">{title}</h1>
                <p className="text-[#8894a6] cursor-default">{description}</p>
            </div>
        </div>
    );
}

export default ServicesCard;