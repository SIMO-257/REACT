import { useState ,useEffect } from "react"

export default function TicketManager(props){

    const [ventes,setVentes] = useState({tickets:0,event:0})
    


    const Vendre = (ventes) =>{
    
        if(ventes.tickets < (props.initialEvents[ventes.event].capacity)){

           const TR = props.initialEvents[ventes.event].capacity - ventes.tickets ;
    
            alert(`Tickets restants : ${TR} `)
            
        }else {
            alert("Sold out!!!")
        }

    }

    return(
        <>
        <fieldset>
            <legend>Ticket Manager</legend>
            <select value={ventes.event} onChange={(e)=>setVentes({...ventes,event : e.target.value })} required>
                {
                    props.initialEvents.map((E,index) =>{
                        return(
                            <option value={index}>{E.name}</option>
                        )
                    })
                }
            </select><br/><br />
            <input type="number" placeholder="Tickets" value={ventes.tickets} onChange={(e)=>setVentes({...ventes,tickets : e.target.value })} required/>
            <button onClick={()=>Vendre(ventes)}>Vendre</button>
        </fieldset>
        </>
    )
}