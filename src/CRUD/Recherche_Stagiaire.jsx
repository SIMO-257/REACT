import { useState,useEffect } from "react"

export default function Filtrer_Stagiaire(props){

    const [cherche,setCherche] = useState("");
    const [List_Recherche,setList] = useState([]);

    useEffect(()=>{

        setList(props.List.filter(S => S.Nom == cherche || S.Adresse.includes(cherche) ));
        
    },[cherche]);
    
    const Cherche = (e) =>{

    setCherche(()=> e.target.value);

    }

    return(
        <>
        <br />
            <input type="text" placeholder="Nom?" value={cherche} onChange={Cherche} />
            <select>
                <option value="Casablanca">Casablanca</option>
                <option value="Tanger">Tanger</option>
                <option value="Rabat">Rabat</option>
            </select>
        <ul>
            {
            List_Recherche.map((Stagiaire,index) => { 
                            return(
                                
                                <li key={index}>
                                    Id:{Stagiaire.Id},
                                    Nom:{Stagiaire.Nom},
                                    Prenom:{Stagiaire.Prenom},
                                    Adresse:{Stagiaire.Adresse},
                                    Ville:{Stagiaire.Ville}
                                </li>
                                
                                )
                            }
                        )
            }
        </ul>
        </>
      
    )

} 