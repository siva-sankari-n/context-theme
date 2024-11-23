import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './theme.css';
import ThemeContext from './ThemeContext';

function Compain() {

  const [theme,setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme ==="dark" ? "light" : "dark"))
  };

  return (
    <div className='full_compain'>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <Header />
            <Content />
            <Footer />
        </ThemeContext.Provider>
    </div>
  )
}

export default Compain