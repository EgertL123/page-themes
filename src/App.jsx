import Page from './components/Page';
import { ThemeProvider } from './components/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App;