import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import { UserMenuProvider } from './context/userMenu';

function App() {
    return (
        <>
            <UserMenuProvider>
                <Hero />
                <ServicesSection/>
                <FeaturedProducts />
            </UserMenuProvider>
        </>
    );
}

export default App;
