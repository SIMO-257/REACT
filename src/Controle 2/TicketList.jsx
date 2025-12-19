import { useState } from "react";
import TicktDetails from "./TicketDetails"
export default function TicketList(props){

let [affichage,setAffichage] = useState(true);
let [t,setT] = useState({titre:'',jour:'',prix:''});



const afficherdetails = (ticket)=>{

  setAffichage(false);
  setT(ticket)
  

}
    return(
        <>
            <ul>
                {props.initialTickets.map((ticket)=>{
                    return (
                        <li> {
                            affichage ? <div><b>"{ticket.title}"</b>  {ticket.ticketDay} , {ticket.price}<button onClick={()=>afficherdetails(ticket)}>Voir les detailles</button> </div> : <TicktDetails ticket={affichage}/>
                            }
                        </li>
                    )
                })}
            </ul>
        </>
    )
}