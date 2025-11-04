import Nom_Prenom_Age from "./Nom_Prenom_Age";

function Stagiaire(){

    return(
        <fieldset>
            <legend>Stagiaire</legend>
            <Nom_Prenom_Age/>
            <input type="number" placeholder="Note" /><br/><br/>
            <button>Submit</button>
        </fieldset>

    )
}
export default Stagiaire