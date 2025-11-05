import React,{useState} from "react";

export default function Personne(props){

    const [age,setAge] = useState(18);

    return(
        <div>
            <p>Nom :{props.nom}</p>
            <p>Prenom : {props.prenom}</p>
            <p>Date de naissance : {props.date_naissance}</p>
            <p>Age : {age}</p>
        </div>
    )



}