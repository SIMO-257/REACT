import Carte from "./Carte"
export default function Cartes({data}){
    return(

        data.map(function(elem){
            return(<Carte data ={elem}/>)
      
        })


    )

}