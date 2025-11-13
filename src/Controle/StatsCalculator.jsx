import { useState } from "react"
export default function StatsCalculator(props){

    const [total_capacité,setCapacité] = useState(props.initialEvents.reduce((total,evnt)=> total += evnt.capacity,0))
    const [total_ventes,setTVentes] = useState(props.initialEvents.reduce((total,evnt)=> total += evnt.ticketsSold,0))
    const [max_tickets,setMTickets] = useState(Math.max(...props.initialEvents.map(E => E.ticketsSold)))
    

   

    return(
        <>
        <fieldset>
            <legend>Statistiques</legend>
            <p>Total événments : {props.initialEvents.length} </p>
            <p>Total capacité : {total_capacité}</p>
            <p>Total tickets vendus : {total_ventes} </p>
            <p>Taux moyen de remplissage : {(total_ventes / total_capacité) * 100}% </p>
            <p>Evenement plus populaires : {props.initialEvents.filter(E => E.ticketsSold == max_tickets).map(E=>E.name)}</p>
        </fieldset>
        </>
    )
}
