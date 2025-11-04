import { useState } from "react";
export default function Name_List(){

    const [nom,setNom] = useState("");
    const [List,setList] = useState([]);

    const Afficher = (e) => {

        if(nom != ""){
        
            setList([...List,nom]);
            setNom("");
            
       
        }
        
    }




    return(
        <div>
            <input type="text" placeholder="Nom" onChange={(e)=> setNom(e.target.value) }/>
            <button onClick={Afficher}>Afficher</button><br/>
            <ul>
                { List.map(p => { return(<li>{p}</li>) }) }
            </ul> 

        </div>
    )

}