import {useState} from "react";

export default function Counter2({pas}){
const  [Count,setCounter] = useState(0);

const Add = () =>{
setCounter(Count+pas);

}


return (<center>
        <div>
        <h1>{Count}</h1>
        <button onClick={Add}>
            {
                pas > 0 ?  `Incrementer by ${pas}` : `Décrementer by ${-1 * pas}`
            }</button>
        </div>
        </center>)

}