import React ,{useContext}from 'react';
import { UserContext } from './ComponentA';
import './contex.css'

function ComponentD(){

    const value=useContext(UserContext);
    return (
        <div className='broD '>
            <h1>Layer D</h1>
            <h2>{`Bye ${value}`}</h2>
        </div>
    )
}

export default ComponentD;