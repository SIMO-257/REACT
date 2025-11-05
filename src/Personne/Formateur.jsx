import Nom_Prenom_Age from "./Nom_Prenom_Age";

function Formateur(){

    return(
        <fieldset>
            <legend>Formateur</legend>
            <Nom_Prenom_Age/>
            <input type="number" placeholder="Salaire" /><br/><br/>
            <button>Submit</button>
        </fieldset>

    )
}
export default Formateur