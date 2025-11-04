import { useState,useEffect } from "react"
export function Filtrer_Stagiaire(props){

    const [nom,setNom] = useState();
    const [ville,setVille] = useState();

    const [List_Recherche,setList] = useState([]);

    useEffect(()=>{

        console.log(nom)
        setList(props.List.filter(S => S.Nom == nom));
 
    },[nom]);
    
    const Cherche = (e) =>{

        setNom(()=> e.target.value);

    /*     setVille(e.target.value);
        setList(props.List.filter(S => S.Ville == ville)); */
        

    }

    return(
        <>
        <br />
            <input type="text" placeholder="Nom?" value={nom} onChange={Cherche} />
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