import { Link } from "react-router-dom"
export default function Nav(){
  return(
     <nav>
         <Link to="/TicketList">List des tickets</Link>
         <Link to="/AddTicket">Ajouter un ticket</Link>
         <Link to="/">Home</Link>
      </nav>
  )
}