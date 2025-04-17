import AboutUsSection from '../components/AboutUsSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

export function Home() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <FeaturedProducts />
            <TestimonialsSection />
            <AboutUsSection />
            <Footer />
        </>
    );
}
