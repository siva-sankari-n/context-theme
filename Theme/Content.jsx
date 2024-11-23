import React, { useState,useContext } from 'react';
import ThemeContext from './ThemeContext';

function Content() {

    const [number,setNumber]=useState(0);
    const {theme,toggleTheme} =useContext(ThemeContext);

    const add = () =>{
        setNumber(number+1);
        toggleTheme();
    }

  return (
    <div className='main el' 
        style={{ 
          background: theme === "dark" ? "darkblue" : "bisque",
          color: theme === "dark" ? "#ddd" : "#000"
        }}>
        <main className='main_content'>
            <p className='numbu'>{number}</p>
            <button onClick={add}
              style={{
                background: theme === "dark" ? "#eee" : "#333",
                color: theme === "dark" ? "#000" : "#fff"
              }}>
                Add
            </button>
        </main>
    </div>
  )
}

export default Content