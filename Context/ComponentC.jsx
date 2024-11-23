import React from 'react';
import ComponentD from './ComponentD.jsx';
import './contex.css'

function ComponentC(){
    return (
        <div className='broC'>
            <h1>Layer C</h1>
            <ComponentD />
        </div>
    )
}

export default ComponentC;