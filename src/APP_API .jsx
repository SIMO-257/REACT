import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import TicketList from "./Controle 2/TicketList";
import AddTicktForm from "./Controle 2/AddTicketForm";
import TicktDetails from "./Controle 2/TicketDetails";
import Nav from "./Nav";
import Home from "./Home";
import { Route,Routes,BrowserRouter} from "react-router-dom";


export default function APP_API(){



const [initialTickets,setListTickets]= useState([
{ id: 1, title: 'Maroc vs Argentine', ticketDay: '2030-02-15', price: 200 },
{ id: 2, title: 'Brésil vs Palestine', ticketDay: '2030-02-18', price: 150 },]); 


const [ticket,setTicket]=useState({id:0,title:'',ticketDay:'',price:0})



const add=(ticket)=>{

if(ticket.id!='' && ticket.title!='' && ticket.price!='' && ticket.ticketDay)
{

  axios.post("http://localhost:3004/tickets",ticket).then((res)=>{
   
   if(res.status==201){

    alert("bien ajouter");
    setListTickets([...initialTickets,ticket]);

    
   }else {

    alert("Erreur du BackEnd")

   }
})
}}

useEffect(()=>{

axios.get("http://localhost:3004/tickets").then((res)=>{
  
   setListTickets(res.data)

})},[initialTickets]);



return(
   <>
      <BrowserRouter>
      <Nav/>
      <Routes>
         <Route path="/TicketList" element={<TicketList initialTickets={initialTickets} />}>
            <Route path=":id/:title/:day/:price" element={<TicktDetails />} />
         </Route>
         <Route path="/AddTicket" element={<AddTicktForm add={add} />} />
         <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter> 
   </>
)    
}