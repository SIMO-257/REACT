import { useState,useEffect } from "react";
export default function SortControl(props){

    const [sort,setSort] = useState("");
    const [List_Sort,setSListe] = useState([]);


    useEffect(()=>{
        if(sort == "name"){

            setSListe(props.initialEvents.sort((a, b) => a.name.localeCompare(b.name)))

        }else if (sort == "date") {

            setSListe(props.initialEvents.sort((a, b) => {
                return new Date(a.eventDate) - new Date(b.eventDate)
            }))

        }else {

            setSListe(props.initialEvents.sort((a, b) => a.ticketsSold - b.ticketsSold))

        }
    },[sort]);
        
    return(
         
        
            <fieldset>     
                <legend>SortControl</legend>   
            <select onChange={(e)=>setSort(e.target.value)}>
                <option value="name" selected>Name</option>
                <option value="date">Date</option>
                <option value="ticketsSold">tickets vendues</option>
            </select><br/>
            <ul>
            {
            List_Sort.map((E,index) => { 
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
        
    )
}