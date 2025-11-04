export default function Amis(){

    const amis = [

        {profil:"../Images/pro1.jpg",nom:"Taha Harnoun"},
        {profil:"../Images/pro2.jpg",nom:"Adam Raji"},
        {profil:"../Images/pro3.jpg",nom:"Azedine Ahbazane"},
        {profil:"../Images/pro4.jpg",nom:"Ayman Lhrach"},
        {profil:"../Images/pro5.jpg",nom:"Anwa Ouata"},
        {profil:"../Images/pro6.jpg",nom:"Boukchouch Adam"},
        {profil:"../Images/card-image.webp",nom:"Amin Anflous"},


    ]

    return(

        <ul className="amis">
            {
                amis.map(function(ami) {
                    return(
                        <li>
                            <img className="Profil" src={ami.profil} />
                            <p>{ami.nom}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}