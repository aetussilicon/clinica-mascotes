import TestimonialsCard from "./TestimonialsCard";

const TestimonialsSection = () => {
    const testimonials = [
        {
            testimonial:
                'A equipe veterinária é incrível! Cuida do meu cachorro Thor há anos com tanto carinho e profissionalismo. Sempre que preciso, estão lá para ajudar.',
            name: 'Carolina Santos',
            role: 'Tutora do Thor',
        },
        {
            testimonial:
                'Fiquei impressionada com o atendimento quando minha gata Mel teve uma emergência. O diagnóstico foi rápido e o tratamento salvou a vida dela. Sou eternamente grata!',
            name: 'Fernanda Oliveira',
            role: 'Tutora da Mel',
        },
        {
            testimonial:
                'Levo meu coelho Algodão aqui desde filhote e a paciência da equipe com animais exóticos é admirável. Explicam tudo com clareza e sempre com muito cuidado.',
            name: 'Ricardo Lima',
            role: 'Tutor do Algodão',
        },
    ];

    return (
        <div className='bg-[#f8f9fa]'>
            <div className=' ssm:mx-[10%] xl:mx-[20%] mb-10 flex flex-col gap-10 py-10 justify-center items-center'>
                <div className='flex flex-col text-center gap-5'>
                    <h1 className='text-3xl xl:text-4xl font-bold'>Depoimentos de Quem Ama Pets</h1>
                    <p className='text-[#8894a6] ssm:text-md xl:text-xl'>
                        Veja o que nossos clientes e seus bichinhos têm a dizer
                    </p>
                </div>
                <div className="flex gap-5 ssm:flex-col xl:flex-row">
                {testimonials.map((testimonial, index) => (
                <TestimonialsCard
                    key={index}
                    testimonial={testimonial.testimonial}
                    name={testimonial.name}
                    role={testimonial.role}
                />
            ))}
                </div>
                
            </div>
        </div>
    );
};

export default TestimonialsSection;
