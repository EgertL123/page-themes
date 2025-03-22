import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className={`header ${theme}`}>
            <h1>Demo Website</h1>
            <button onClick={toggleTheme}>
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </header>
    );
}

export default Header;