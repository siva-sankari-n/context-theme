import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Header() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className='header el' 
       style={{
          background: theme === "dark" ? "#333" : "#eee",
          color: theme === "dark" ? "#fff" : "#000"
       }}>
        <header className='head_content'>
            CONTEXT
        </header>
    </div>
  )
}

export default Header