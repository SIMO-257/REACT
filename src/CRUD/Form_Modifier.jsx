import { useState } from "react";

export default function Form_Modifier(props){

    const [newStagiaire,setNewStagiaire] = useState(props.Stagiaire);

    const NewValue = (e) =>{

        setNewStagiaire({...newStagiaire,[e.target.name]:e.target.value})

    }


    if(props.Stagiaire != null ){

        return(
            <>
            <fieldset>
                <legend>Formulaire Edit:</legend>
                <input name="Id" placeholder="Id" type="number" value={newStagiaire.Id} onChange={NewValue} readOnly/><br /><br />
                <input name="Nom" placeholder="Nom" type="text" value={newStagiaire.Nom} onChange={NewValue}/><br /><br />
                <input name="Prenom" placeholder="Prenom" type="text" value={newStagiaire.Prenom} onChange={NewValue}/><br /><br />
                <textarea name="Adresse" placeholder="Adresse" value={newStagiaire.Adresse} onChange={NewValue}>
                </textarea><br/><br />
                <select name="Ville" value={newStagiaire.Ville} onChange={NewValue}>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Tanger">Tanger</option>
                    <option value="Dakhla">Dakhla</option>
                </select>
                <button onClick={()=>{props.Modifier(newStagiaire)}} >Modifier</button>
            </fieldset><br />
            </>
        )


    }else{
        alert("Error fetch Stagiaire!!!")
    }
           
        
}