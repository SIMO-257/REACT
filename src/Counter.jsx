import React,{useState} from "react";

export default function Counter(){
const  [Count,setCounter] = useState(0);

const Add = () =>{
setCounter(Count+1)
}
const Reset = ()=>{
    setCounter(0)
}

return (<center>
        <div>
        <b>{Count}</b><br/>
        <button onClick={Add}>Click</button>
        <button onClick={Reset}>Reset</button>
        </div>
        </center>)

}