import './App.css';
import Hero from './components/Hero';
import { UserMenuProvider } from './context/userMenu';

function App() {
    return (
        <>
            <UserMenuProvider>
                <Hero />
            </UserMenuProvider>
        </>
    );
}

export default App;
