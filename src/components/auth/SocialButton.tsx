interface SocialButtonProps {
    provider: 'google' | 'outlook' | 'facebook';
    onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onClick }) => {
    const providerInfo = {
        google: {
            icon: 'icons/google.svg',
            text: 'Continuar com o Google',
        },
        outlook: {
            icon: 'icons/outlook.svg',
            text: 'Continuar com o Outlook',
        },
        facebook: {
            icon: 'icons/facebook.svg',
            text: 'Continuar com o Facebook',
        },
    };

    const { icon, text } = providerInfo[provider];

    return (
        <div>
            <button
                type='button'
                className='relative py-2 w-[350px] text-center border rounded-lg cursor-pointer hover:bg-lime-50 transition duration-200'
                onClick={onClick}
            >
                <img src={icon} alt={provider} width={25} className='absolute left-4 top-2' />
                <span className='text-mg'>{text}</span>
            </button>
        </div>
    );
};

export default SocialButton;