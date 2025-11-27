import { useState , useEffect } from "react"
import EventForm from "./EventForm"
import EventList from "./EventList"
import TicketManager from "./TicketManager";
import StatsCalculator from "./StatsCalculator";
import FilterPanel from "./FilterPanel";
import SortControl from "./SortControl";

function AppExamen(){

    const [Affichage,setAffichage] = useState(true);

    const [event,setEvent] = useState(
        {
            id: 0,
            name: "",
            date: "",
            capacity: 0,
            ticketsSold: 1,
            price: 0,
            category: ""
        }
    )

    const [initialEvents,setEvents] = useState([

        {id:1,name : "MAWAZIN", date : "2030-12-10", capacity : 300,ticketsSold : 100,price :15 ,category : "Cinéma"},
        {id:2,name : "Gnawa", date : "2026-10-20", capacity : 1000,ticketsSold : 900,price :50 ,category : "Conférence"}

    ])

    const Ajouter = (event) =>{

        if(event.id != 0 && event.name != "" && event.date != "" && event.capacity != 0 && event.price != 0 && event.category != ""){

        setEvents([...initialEvents,event]);

        }
       
    }

    const Supprimer = (id) =>{

        setEvents(initialEvents.filter(E=>E.id != id));

    }

    const Editer = (E) =>{
        setEvent(E)
        setAffichage(false);     
    }

    const Modifier = (newEvent) => {

        setEvents(initialEvents.map(E=> E.id == newEvent.id ? newEvent : E ));
        setAffichage(true);    

    }

    

    

return(
    <>
        <EventForm Modifier={Modifier} Ajouter={Ajouter} event={event} Affichage={Affichage} />
        <EventList initialEvents={initialEvents} Supprimer={Supprimer} Editer={Editer} />
        <TicketManager initialEvents={initialEvents} />
        <StatsCalculator initialEvents={initialEvents}/>
        <FilterPanel initialEvents={initialEvents} Supprimer={Supprimer} Editer={Editer}/>
        <SortControl initialEvents={initialEvents} Supprimer={Supprimer} Editer={Editer}/>

    </>
)
}
export default AppExamen