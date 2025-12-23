import { useState } from "react";
import { useDispatch } from "react-redux";
import ADD_TICKET from "../ticketActions";

export default function AddTicktForm(props){
const dispatch = useDispatch();
const [ticket,setTicket]=useState({id:0,title:'',ticketDay:'',price:0})

 
const getValue=(e)=>{
    setTicket(ticket=>({
      ...ticket,
      [e.target.name]:e.target.value
    }))
}


    return(

     <div>
    <fieldset>
      <legend>Add new Post</legend>
      <form>
        <input placeholder="Id" type="number" name="id"  onChange={getValue} /><br/><br/>
        <input placeholder="Title" type="text"  name="title" onChange={getValue} /><br/><br/>
        <input placeholder="TicketDay" type="date"  name="ticketDay"  onChange={getValue}  /><br /><br/>
        <input placeholder="Price" type="number" name="price"  onChange={getValue} /><br/><br/>
        <input value="Ajouter" type="button" onClick={()=>{props.add(ticket);dispatch(ADD_TICKET(ticket))}}  />
      </form>
      </fieldset>
      </div>
     
     );

}