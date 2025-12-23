import { useState } from "react";
import TicktDetails from "./TicketDetails"
import { useSelector } from "react-redux";
export default function TicketList(props){

let [affichage,setAffichage] = useState(true);

const ticketList = useSelector((state)=>state.tickets)


const afficherdetails = (ticket)=>{

  setAffichage(false);
  setT(ticket)
  

}
    return(
        <>
            <ul>
                {ticketList.map((ticket)=>{
                    return (
                        <li> 
                
                            <div><b>"{ticket.title}"</b>  {ticket.ticketDay} , {ticket.price}<button onClick={()=>afficherdetails(ticket)}>Voir les detailles</button> </div> 
                            
                        </li>
                    )
                })}
            </ul>
        </>
    )
}