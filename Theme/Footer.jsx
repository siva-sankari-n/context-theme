import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Footer() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className='footer el' style={{
      background : theme === "dark" ? "#222" : "#ddd",
      color: theme === "dark" ? "#fff" : "#000"
    }}>
        <footer className='foot_content'>
            We learnt it !!!
        </footer>
    </div>
  )
}

export default Footer