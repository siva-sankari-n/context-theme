import React,{useState} from 'react';

function Demo(){

    const [count,setCount]=useState(0);

    const add = () => {
        setCount(count+1)
    }

    const sub = () =>{
        setCount(count-1)
    }

    return (
        <div>
            <h1>Number is : {count}</h1>
            <button onClick={add}>Increment</button>
            <button onClick={sub}>Decrement</button>
        </div>
    )
}

export default Demo; 