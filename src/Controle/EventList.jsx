import EventCard from "./EventCard"
export default function EventList(props){

    return(
        <ul>
            {
            props.initialEvents.map((E,index) => { 
                            return(
                                
                               <EventCard E={E} index={index}  Supprimer={props.Supprimer} Editer={props.Editer}/>
                                
                                )
                            }
                        )
            }
        </ul>
    )

}