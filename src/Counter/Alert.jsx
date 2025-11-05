import { useState } from "react";
export default function Alert(){

    const [message,setMessage] = useState("")
    const [password,setPassword] = useState("");

    const Alert_Message = (e) =>{

        setPassword(e.target.value);
        console.log(password.length);
        password.length >= 3 ? setMessage("") : setMessage(" Le password doit contenu 4 caractéres!!!");

    }

    return(
        <div>
            <input type="password" placeholder="Enter password" value={password} onChange={Alert_Message} cla/><br />
            <p>{message}</p>
        </div>
    )
}
