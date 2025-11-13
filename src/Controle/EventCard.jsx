export default function EventCard(props){
    return(
        <>
             
                                
                                <section key={props.index}>
                                    <div>   
                                        <h4>{props.E.name}</h4>
                                        <b><i>{props.E.date}</i></b><br /><br />
                                        <b>
                                            <button onClick={()=>{props.Supprimer(props.E.id)} }>Supprimer</button>
                                            <button onClick={()=>{props.Editer(props.E)} }>Edit</button>    
                                        </b>

                                    </div>
                                    <div>
                                        <h4>{props.E.ticketsSold} / {props.E.capacity}</h4>
                                        <p>{props.E.price}DH</p>
                                    </div>
                                    
                    
                                </section>
                                
                                    
                                        
        </>
    )
}