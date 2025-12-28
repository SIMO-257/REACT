import { useParams } from "react-router-dom"
export default function TicktDetails(){

let {id,title,day,price} = useParams();

return(
<>
<div>
    <li>{id}</li>
    <li>{day}</li>
    <li>{title}</li>
    <li>{price}</li>    
</div>
</>
)


}