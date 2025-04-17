import './App.css';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import { UserMenuProvider } from './context/userMenu';

function App() {
    return (
        <>
            <UserMenuProvider>
                <Hero />
                <ServicesSection/>
            </UserMenuProvider>
        </>
    );
}

export default App;
