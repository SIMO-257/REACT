export default function Barre(){

    const Barr_data = [
        {icon_image:"../Images/beach.jpg",text:"Mohammed Mammah"},
        {icon_image:"../Icons/amis.png",text:"Amie(e)s"},
        {icon_image:"../Icons/souvenirs.png",text:"Souvenirs"},
        {icon_image:"../Icons/save.png",text:"Enregistrements"},
        {icon_image:"../Icons/groupe.png",text:"Groupes"},
        {icon_image:"../Icons/vid.png",text:"Vidéo"},
        {icon_image:"../Icons/marché.png",text:"Marketplace"},
        {icon_image:"../Icons/files.png",text:"Fils"},
        {icon_image:"../Icons/amis.png",text:" "},
        {icon_image:"../Icons/amis.png",text:" "}



    ]
    
    return(

        <ul>
            {
                Barr_data.map(function(icon) {
                    return(
                        <li>
                            {
                            
                                icon.text == "Mohammed Mammah" ? 
                                <img className="Profil" src={icon.icon_image} /> : 
                                <img className="Icons-barre" src={icon.icon_image} /> 

                            }
                            
                            <p>{icon.text}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}