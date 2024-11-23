import React ,{useState,useEffect} from 'react'

function Effective(){

    const [width,setWidth]=useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight);

    const insize = () =>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize",insize)
        console.log("Event listener added");
        return() => {            
            window.removeEventListener("resize",insize)
            console.log("Event listener removed")
        }
    },[width,height]);

    return(
        <div>
            <h1>Width of the Page:{width}px </h1>
            <h1>Height of the Page:{height}px </h1>
        </div>
    )

}

export default Effective;