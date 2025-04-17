import FeaturedProductsCards from "./cards/FeaturedProductsCards";

const FeaturedProducts = () => {

    const products = [{
        imageUrl: "prod1.jpg",
        category: "Vestuário",
        title: "Fantasia de abelinha",
        price: "129,99",
    },
    {
        imageUrl: "prod2.jpg",
        category: "Lazer",
        title: "Cama para pets",
        price: "89,99",
    },
    {
        imageUrl: "prod4.jpg",
        category: "Brinquedos",
        title: "Brinquedo de pelúcia",
        price: "49,99",
    },
    {
        imageUrl: "prod3.jpg",
        category: "Alimentação",
        title: "Ração Premium",
        price: "199,99",
    }]

    return (
        <div className='ssm:mx-[10%] xl:mx-[20%] mb-10 flex flex-col gap-10 py-10 bg-[#fff]'>
            <div className='flex flex-col text-center gap-5'>
                <h1 className='text-3xl xl:text-4xl font-bold'>Produtos Selecionados</h1>
                <p className='text-[#8894a6] ssm:text-md xl:text-xl'>
                    Itens de qualidade para a alegria e saúde do seu pet.
                </p>
            </div>
            <div className="grid ssm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {products.map((product, index) => (
                    <FeaturedProductsCards
                        key={index}
                        imageUrl={product.imageUrl}
                        category={product.category}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
