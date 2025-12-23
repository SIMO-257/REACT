import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import TicketList from "./Controle 2/TicketList";
import AddTicktForm from "./Controle 2/AddTicketForm";

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
    <TicketList initialTickets={initialTickets} />
    <AddTicktForm add={add}/>
    </>
)    
}