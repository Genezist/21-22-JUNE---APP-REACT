import {useState} from "react";
function Item({name}){
    const [pack,setPack]=useState(0);
    function RandomDice(){
        let num=Math.round(Math.round()*6)+1;
        setPack(num);
    }
    if(pack%6==0)
        return (<li onClick={RandomDice}>{name} A</li>)
    if(pack%6==1)
        return (<li onClick={RandomDice}>{name} B</li>)
    if(pack%6==2)
        return (<li onClick={RandomDice}>{name} C</li>)
    if(pack%6==3)
        return (<li onClick={RandomDice}>{name} D</li>)
    if(pack%6==4)
        return (<li onClick={RandomDice}>{name} E</li>)
    if(pack%6==5)
        return (<li onClick={RandomDice}>{name} F</li>)

}
export default function Gambling(){
    return(<>
        <h1>GAMBLING</h1>
        <ol>
            <Item name="Sunglasses"/>
            <Item name="Headphones"/>
            <Item name="Water bottles"/>
            <Item name="Powerbank"/>
            <Item name="Deodorant"/>
        </ol>
    </>);
}