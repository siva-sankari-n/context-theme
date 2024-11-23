//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This Component re-renders
//              This components Mounts
//              The state of a value

//useEffect (function, [dependencies])

//1. useEffect(() => {})            //Runs after every re-render
//2. useEffect(() => {} , [] )      //Runs only on mount
//3. useEffect(() => {} , [value])  //Runs on mount + when value changes b

//USES
//#1 Event Listener
//#2 DOM
//#3 real-time updates
//#4 Fetching Data from an API
//#5 Clean up when a components unmounts

import React,{useState,useEffect} from 'react'

function Effect() {

    const [count,setCount] = useState(0);
    const [color,SetColor] =useState("green")
    
   useEffect(() => {
    const h1Element = document.getElementById('sri');
        if (h1Element) {
            h1Element.textContent = `Value: ${count} in ${color}`;
            h1Element.style.color=color
        }
    }, [count,color]);
   

    function addCount(){
        setCount(c => c+1)
    }

    function subCount(){
      setCount(c => c-1)
    }

    const [index,SetIndex]=useState(0)

    function changeColor(){
      const colors=["blue","purple","red","orange"]
      SetIndex(prev => (prev+1)%colors.length)
      SetColor(c => c= colors[index])
    }

  return (
    <>
    <p style={{color: color}}>Count : {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subCount}>Sub</button>
    <button onClick={changeColor}>Change color</button>
    <h1 id='sri'></h1>
    </>
  )
}

export default Effect