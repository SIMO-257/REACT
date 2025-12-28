import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function TicketList(props){

const navigate = useNavigate();
const [aff,setAff] = useState(false);
const ticketList = useSelector((state)=>state.tickets)


const afficherdetails = (ticket)=>{
if(aff){
    setAff(!aff)
}else {
    navigate(`/TicketList/${ticket.id}/${ticket.title}/${ticket.ticketDay}/${ticket.price}`);
    setAff(!aff);
}
    
  

}
    return(
        <>
            <ul>
                {props.initialTickets.map((ticket)=>{
                    return (
                        <li> 
                            <div><b>"{ticket.title}"</b>  {ticket.ticketDay} , {ticket.price}<a onClick={()=>afficherdetails(ticket)}>Voir les detailles</a> </div>

                        </li>
                    )
                })}
            </ul>
            {aff && <Outlet/>}
            
        </>
    )
}