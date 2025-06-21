import './Counter.css'
import { useState } from "react";
export default function Counter(){

    const [count,setCount]=useState(0);
    return(<>
        <button onClick={()=>setCount(count+1)}>
            +1
        </button>
        <button onClick={()=>setCount(count-1)}>
            -1
        </button>
        <p>
            You clicked {count} times.
        </p>
        <button onClick={()=>setCount(count*0)}>
            RESET
        </button>
    </>);

}