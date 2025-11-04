export default function Desplay_Stagiares(props){

    return(
        <ul>
            {
            props.List_Stagiaires.map((Stagiaire,index) => { 
                            return(
                                
                                <li key={index}>
                                    Id:{Stagiaire.Id},
                                    Nom:{Stagiaire.Nom},
                                    Prenom:{Stagiaire.Prenom},
                                    Adresse:{Stagiaire.Adresse},
                                    Ville:{Stagiaire.Ville}
                                    <button onClick={()=>{props.Supprimer(Stagiaire.Id)} }>Supprimer</button>
                                    <button onClick={()=>{props.Editer(Stagiaire)} }>Edit</button>
                                </li>
                                
                                )
                            }
                        )
            }
        </ul>
    )
}