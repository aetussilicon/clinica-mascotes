import { createContext, useContext, useState, ReactNode } from 'react';

interface UserMenuContextData {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    openMenu: () => void;
    closeMenu: () => void;
}

const UserMenuContext = createContext<UserMenuContextData>({} as UserMenuContextData);

interface UserMenuProviderProps {
    children: ReactNode;
}

export function UserMenuProvider({ children }: UserMenuProviderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <UserMenuContext.Provider value={{ isMenuOpen, toggleMenu, openMenu, closeMenu }}>
            {children}
        </UserMenuContext.Provider>
    );
}

export function useUserMenu(): UserMenuContextData {
    const context = useContext(UserMenuContext);
    
    if (!context) {
        throw new Error('useUserMenu must be used within a UserMenuProvider');
    }
    
    return context;
}