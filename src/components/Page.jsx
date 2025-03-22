import { useContext } from 'react';
import Header from './Header';
import ThemeContext from './context/ThemeContext';
import './Page.css';

const Page = () => {
    const { theme } = useContext(ThemeContext); 

    return (
        <div id="app" className={theme}>
        <Header />
        <article>
            <h2>Theme toggler</h2>
            <p>
                A course that teaches you React.
            </p>
        </article>
        </div>
    );
}

export default Page;