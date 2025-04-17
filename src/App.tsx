import './App.css';
import { UserMenuProvider } from './context/userMenu';
import { AppRoutes } from './Routes';

function App() {
    return (
        <>
            <UserMenuProvider>
                <AppRoutes />
            </UserMenuProvider>
        </>
    );
}

export default App;
