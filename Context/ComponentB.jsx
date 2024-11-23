import React from 'react';
import ComponentC from './ComponentC.jsx';
import './contex.css'

function ComponentB(){
    return (
        <div className='broB'>
            <h1>Layer B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB;