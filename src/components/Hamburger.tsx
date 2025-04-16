import { useUserMenu } from "../context/userMenu";

const Hamburger = () => {

    const {isMenuOpen, toggleMenu} = useUserMenu();

    return (
        <>
            <button 
            onClick={toggleMenu}
            className={`hamburger hamburger--elastic ${isMenuOpen ? 'is-active' : ''}`} type='button'>
                <span className='hamburger-box'>
                    <span className='hamburger-inner'></span>
                </span>
            </button>
        </>
    );
};

export default Hamburger;
