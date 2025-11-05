import React,{useState} from "react";

export default function ColorSelector(){

    const [color,setColor] = useState();
function ColorChanging(event) {
    setColor(event.target.value);
}
    return(
        <>
        <div className="Color-Selecter">
            <h1>Color Selecter</h1>
            <div className="color-selected" style={{backgroundColor:color}}>
                <p>{color}</p>
            </div>
            <label>
                Select a Color:<br/>
                <input type="color" value={color} onChange={ColorChanging}/> 
            </label>
        </div>
        </>
    )

}