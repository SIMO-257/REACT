import { useState , useEffect } from "react";
export default function EventForm(props){

    const [evnt,setEvent] = useState(
            {
                id: 0,
                name: "",
                date: "",
                capacity: 0,
                ticketSold: 0,
                price: 0,
                category: ""
            }
        )

    const ChangerValeurs = (e) =>{

        setEvent({...evnt,[e.target.name] : e.target.value});

    }

    useEffect(() => {

    if (props.event) {

      setEvent(props.event);

    }}, [props.event]);   

    return(
        <>
            <fieldset>   
                <legend>Formulaire:</legend>
                
                

                <input name="id" placeholder="Id" type="number" onChange={ChangerValeurs} value={evnt.id} required/><br /><br />
                <input name="name" placeholder="Name" type="text" onChange={ChangerValeurs} value={evnt.name} required/><br /><br />
                <input name="date" placeholder="Date" type="date" onChange={ChangerValeurs} value={evnt.date} required/><br /><br />
                <input name="capacity" placeholder="Capacity" type="number" onChange={ChangerValeurs} value={evnt.capacity} required/><br /><br />
                <input name="price" placeholder="Price" type="number" onChange={ChangerValeurs}value={evnt.price} required/><br /><br />
             
                <select name="category" onChange={ChangerValeurs} value={evnt.category} required>
                    <option value="None" selected>-- Category --</option>
                    <option value="Cinéma">Cinéma</option>
                    <option value="Conférence">Conférence</option>
                </select><br/><br />
            { props.Affichage ?<button  onClick={()=>props.Ajouter(evnt)}>Ajouter</button> : <button type="submit" onClick={(e)=>props.Modifier(evnt)}>Modifier</button>  }
             
                <button onClick={()=>document.forms[0].reset()}>Reset</button>
            
            </fieldset>
        </>
    )
}