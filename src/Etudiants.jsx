

function Etudiants(props){

    return(
        <div className="Intro">
            <b>Nom:{props.nom}</b><br/>
            <b>Age:{props.age}</b><br />
            <b>Est_Etudiant:{props.estEtudiant? "Oui" : "Non"}</b>
        </div>
    )

}
Etudiants.defaultProps = {

    nom:"Guest",
    age: 0,
    estEtudiant:false
}


export default Etudiants