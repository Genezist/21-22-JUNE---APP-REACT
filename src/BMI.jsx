import './Bmi.css';
import { useRef,useState } from 'react';
    const BMIText=({BMI})=>{
        if(BMI<18.5)
            return(<>
            น้ำหนักต่ำกว่าเกณฑ์<br></br>
            <img src="Enderman_Screaming.png" height="500px"/>
            </>);
        if(BMI>18.5 && BMI<22.9)
            return(<>
            น้ำหนักสมส่วน<br></br>
            <img src="Steve.webp" height="500px"/>
            </>);
        if(BMI>22.9 && BMI<24.9)
            return(<>
            น้ำหนักเกินมาตรฐาน<br></br>
            <img src="Farmer.webp" height="500px"/>
            </>);
        if(BMI>24.9 && BMI<29.9)
            return(<>
            เป็นโรคอ้วนระดับที่ 1<br></br>
            <img src="Piglin.webp" height="500px"/>
            </>);
        if(BMI>29.9)
            return(<>
            เป็นโรคอ้วนระดับที่ 2<br></br>
            <img src="Slime.webp" height="500px"/>
            </>);

    }
export default function  BMI(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [BMI,setBMI]=useState(0);
    const calBMI=()=>{
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBMI(w/Math.pow(h,2));
    }
    return(<>
        <h1>เครื่องคิดเลขคำนวณค่า BMI</h1>
        <ul>
        <h4>น้ำหนัก: <input ref={w_inputRef} /> กิโลกรัม</h4>
        <h4>ส่วนสูง: <input ref={h_inputRef} /> เซนติเมตร</h4>
        <button onClick={()=>calBMI()}> คำนวณ</button>
        <h3>ค่า BMI : {BMI.toFixed(2)}</h3>
        <h3>อยู่ในเกณฑ์ : <BMIText BMI={BMI}/></h3>
        </ul>
    </>);
}