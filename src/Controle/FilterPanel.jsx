import { useState,useEffect } from "react";
export default function FilterPanel(props){

    const [date_cherche,setDate] = useState("");
    const [taux_cherche,setTaux] = useState("");

    const [List_Recherche,setList] = useState([]);

    useEffect(()=>{
    
        setList(props.initialEvents.filter(E => E.date == date_cherche || ((E.ticketsSold % E.capacity) * 100) > taux_cherche))
            
    },[taux_cherche,date_cherche]);
        
 

    return(
         
        <>
            <fieldset>     
                <legend>FilterPanel</legend>   
            <input type="date" value={date_cherche} onChange={(e)=>setDate(e.target.value)}/><br /><br />
            <input type="number" placeholder="Min-Taux Remplisage" value={taux_cherche} onChange={(e)=>setTaux(e.target.value)}/><br />
            <ul>
            {
            List_Recherche.map((E,index) => { 
                            return(
                                
                               <section key={index}>
                                    <div>   
                                        <h4>{E.name}</h4>
                                        <b><i>{E.date}</i></b><br /><br />
                                        <b>
                                            <button onClick={()=>{props.Supprimer(props.E.id)} }>Supprimer</button>
                                            <button onClick={()=>{props.Editer(props.E)} }>Edit</button>    
                                        </b>
                                    </div>
                                    <div>
                                        <h4>{E.ticketsSold} / {E.capacity}</h4>
                                        <p>{E.price}DH</p>
                                    </div>
                                </section>
                                
                                )
                            }
                        )
            }
            </ul>
            </fieldset>
        </>
    )


}




