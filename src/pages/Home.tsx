import Footer from "../components/Footer";
import { AboutUsSection, FeaturedProducts, Hero, ServicesSection, TestimonialsSection } from "../components/home";


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
