import './App.css';
import { UserMenuProvider } from './context/userMenu';
import { Home } from './pages/Home';

function App() {
    return (
        <>
            <UserMenuProvider>
                <Home />
            </UserMenuProvider>
        </>
    );
}

export default App;
