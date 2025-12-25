import { useParams } from "react-router-dom"
export default function TicktDetails(props){

let {id} = useParams();
let L = props.initialTickets
const T = L.find((t) => t.id == Number(id) )

return(
<>
<div>
    <li>{T.id}</li>
    <li>{T.ticketDay}</li>
    <li>{T.title}</li>
    <li>{T.price}</li>    
</div>
</>
)


}