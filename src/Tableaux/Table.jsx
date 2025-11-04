
export default function Table({T}){
return (
 <>

      <table border="1">
            <thead>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Age</th>
            </thead>
            <tbody>
                {
                    
T.map(function(elem) {
    return(<tr>
            <td>{elem.Nom}</td>
            <td>{elem.Prenom}</td>
            <td>{elem.Age}</td>
            </tr>)})    
            }
            </tbody>
        </table><br/>
    
 </>
   
)

}