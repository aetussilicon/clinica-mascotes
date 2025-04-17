import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import { UserMenuProvider } from './context/userMenu';

function App() {
    return (
        <>
            <UserMenuProvider>
                <Hero />
                <ServicesSection/>
                <FeaturedProducts />
                <TestimonialsSection />
            </UserMenuProvider>
        </>
    );
}

export default App;
