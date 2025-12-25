import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function TicketList(props){

const navigate = useNavigate();

const ticketList = useSelector((state)=>state.tickets)


const afficherdetails = (ticketid)=>{

    navigate(`/TicketList/${ticketid}`);
  

}
    return(
        <>
            <ul>
                {props.initialTickets.map((ticket)=>{
                    return (
                        <li> 
                
                            <div><b>"{ticket.title}"</b>  {ticket.ticketDay} , {ticket.price}<a onClick={()=>afficherdetails(ticket.id)}>Voir les detailles</a> </div> 
                            
                        </li>
                    )
                })}
            </ul>
        </>
    )
}