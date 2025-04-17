import './App.css';
import AboutUsSection from './components/AboutUsSection';
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
                <AboutUsSection />
            </UserMenuProvider>
        </>
    );
}

export default App;
