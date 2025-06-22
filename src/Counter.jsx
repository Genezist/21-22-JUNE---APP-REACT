import './Counter.css'
import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("0")
    function onTextChange(event){
        console.log("This function is called:"+event.target.value);
        console.error("ERROR !");
        setValue(event.target.value);
    }
    return(<>
        <input value={value} onChange={(event)=>onTextChange(event)}/>
        <ul>
        <p>{value} Celcius to {value*1.8+32} Farenheit.</p>
        <p>{value} cm2 to {value*0.001} m2</p>
        <p>{value} atm to {value*760} torr/mmHg</p>
        <p>{value} m to {value*1609.34} miles</p>
        <p>You typed {value.length} characters.</p>
        </ul>
        <button onClick={()=>setCount(count+1)}>
            +
        </button>
        <button onClick={()=>setCount(0)}>
            RESET
        </button>
        <button onClick={()=>setCount(count-1)}>
            -
        </button>
        <p>Result : {count}</p>
    </>);

}