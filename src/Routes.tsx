import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { NotFound } from './pages/NotFound';
import { Profile } from './pages/Profile';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NotFound />} /> 
            </Routes>
        </BrowserRouter>
    );
}
