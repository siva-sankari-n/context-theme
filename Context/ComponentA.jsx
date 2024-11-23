//useContext() = React hook that allows you to share values
//               between multiple levels of components
//               without passing props through each level


//PROVIDE COMPONENT:
// 1. import {createContext} from 'react
// 2. export const MyCOntext = createContext();
// 3. <MyContext.Provider value ={value}>
//          <Child />
//     </MyContext.Provider>


// CONSUMER COMPONENTS
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext{MyContext};



import React,{useState,createContext} from 'react';
import ComponentB from './ComponentB.jsx';
import './contex.css'; 

export const UserContext = createContext(); 

function ComponentA(){
    const [user,setUser]=useState("It's me");
    return (
        <div className="bro1">
            <div className='bro'>
                <h1>Layer A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                     <ComponentB user={user}/>
                </UserContext.Provider>
                
        </div>
        </div>
    )
}

export default ComponentA;