import { useState } from 'react';

import Form_Stagiares from './CRUD/Form_Stagiaire';
import Desplay_Stagiares from './CRUD/Desplay_Stagiaires';
import Filtrer_Stagiaire from './CRUD/Recherche_Stagiaire';

function App() {

    const [List_Stagiaires,setList_Stage] = useState([
        {Id:1,Nom : "Mohammed", Prenom : "Mammah", Adresse : "Casablnca Salmia2",Ville : "Casablanca"},
        {Id:2,Nom : "Yassine", Prenom : "Elmiri", Adresse : "Casablnca Nassr",Ville : "Tanger"},
        {Id:3,Nom : "Taha", Prenom : "Harnoun", Adresse : "Casablnca Sbata",Ville : "Casablanca"}
    ]);
    const [Affichage,setAffichage] = useState(true);

  
    const [Stagiaire,setStagiaire] = useState({

        Id : 0 ,
        Nom : "",
        Prenom : "",
        Adresse : "",
        Ville : ""

    });

    const Ajouter = (Stagiaire) => {
        
        setList_Stage([...List_Stagiaires,Stagiaire]);
         
    }

    const Supprimer = (id) => {

        setList_Stage(List_Stagiaires.filter(S=>S.Id != id));
        
    }

    const Editer = (Stagiaire) => {

        setStagiaire(Stagiaire);
        setAffichage(false);      
        
    }

    const Modifier = (newStagiaire) => {

        setList_Stage(List_Stagiaires.map(S=> S.Id == newStagiaire.Id ? newStagiaire : S ));
        setAffichage(true);    

    }
 


 
return (
    <>

    
    <Form_Stagiares Affichage={Affichage} Ajouter={Ajouter} Modifier={Modifier}  Stagiaire={Stagiaire}   />  
    <Desplay_Stagiares List_Stagiaires={List_Stagiaires} Supprimer={Supprimer} Editer={Editer}  />
    <Filtrer_Stagiaire List={List_Stagiaires}/>
        
 
        
    </> 
)
}

export default App

{
    //<Desplay_Stagiares List_Stagiaires={List_Stagiaires} Supprimer={Supprimer} Editer={Editer}  />
    // <Filtrer_Stagiaire List={List_Stagiaires}/>

}