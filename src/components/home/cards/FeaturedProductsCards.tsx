import { ShoppingCart } from "lucide-react";
import React from "react";

interface FeaturedProductsCardsProps {
    imageUrl: string;
    category: string;
    title: string;
    price: string;
}

const FeaturedProductsCards: React.FC<FeaturedProductsCardsProps> = ({
    imageUrl,
    category,
    title,
    price,
}) => {
    return (
        <div className='shadow-md w-fit h-fit rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out'>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='h-72 w-72 bg-cover' />
            <div className='p-4 flex flex-col gap-2'>
                <div className='px-2 py-1 text-sm text-white font-bold bg-green-500 w-fit rounded-full'>{category}</div>
                <h2 className='text-xl font-bold mt-2'>{title}</h2>
                <h2 className="text-lg font-bold text-green-500">R$ {price}</h2>
                <button type="button" className="flex gap-3 bg-primary hover:bg-primaryHover transition duration-300 w-full p-4 text-white text-sm rounded-xl items-center justify-center"><ShoppingCart /> <span>Adicionar ao Carrinho</span></button>
            </div>
        </div>
    );
};

export default FeaturedProductsCards;
