import { useState , useEffect } from "react";

export default function Form_Stagiares(props){

    const [S, setS] = useState({
    Id: "",
    Nom: "",
    Prenom: "",
    Adresse: "",
    Ville: "None",
    });

    useEffect(() => {

    if (props.Stagiaire) {

      setS(props.Stagiaire);

    }}, [props.Stagiaire]);   
 
    const ChangerValeurs = (e) => {

        setS({...S,[e.target.name]:e.target.value})

    }
           
        return(
            <div>
            <fieldset>
                <legend>Formulaire:</legend>
        
                <input name="Id" placeholder="Id" type="number" onChange={ChangerValeurs} value={S.Id }required/><br /><br />
                <input name="Nom" placeholder="Nom" type="text" onChange={ChangerValeurs} value={S.Nom}/><br /><br />
                <input name="Prenom" placeholder="Prenom" type="text" onChange={ChangerValeurs} value={S.Prenom} required/><br /><br />
                <textarea name="Adresse" placeholder="Adresse" onChange={ChangerValeurs} value={S.Adresse} required>

                </textarea><br/><br />
                <select name="Ville" onChange={ChangerValeurs} value={S.Ville} required>
                    <option value="None" selected>.....</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Tanger">Tanger</option>
                    <option value="Dakhla">Dakhla</option>
                </select>

                
            
            </fieldset>
            { props.Affichage?<button onClick={(e)=>props.Ajouter(S)}>Ajouter</button> : <button onClick={(e)=>props.Modifier(S)}>Modifier</button>  }
                
            </div>
            
        )
        
}