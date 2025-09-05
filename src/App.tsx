import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { lightTheme, darkTheme } from './theme/theme';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { DebugToggle } from './components/Debug/DebugTooltip';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Pricing } from './pages/Pricing';
import { Documents } from './pages/Documents';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import './i18n/i18n';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <div className="flex flex-col min-h-screen">
          <DebugToggle />
          <Header toggleTheme={toggleTheme} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/:variant" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:variant" element={<Courses />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing/:variant" element={<Pricing />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/documents/:variant" element={<Documents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;