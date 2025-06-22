import { useState } from "react";
function Item({name}){
    const [pack,setPack]=useState(0);
    if(pack%2==0)
        return(<li onClick={()=>setPack(pack+1)}>{name} ❌</li>);
    if(pack%2==1)
        return(<li onClick={()=>setPack(pack+1)}>{name} ✅</li>);
}
export default function Backpack(){
    const items=["Sunglasses","Headphones","Water bottles","Powerbank","Deodorant"]
    const filterList=items.filter(i=>i.includes("Sunglasses"));
    return(<>
        <h1>BACKPACK LIST</h1>
        <ol>
            {filterList.map(i=><Item name={i}/>)}
        </ol>
    </>);
}