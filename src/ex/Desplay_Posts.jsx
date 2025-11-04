import { useState } from "react"
export default function Desplay_Post(props){

const [num,setNum] = useState(Math.ceil(props.Posts_List.length / 2));

return (
<>
    <h2>Les posts</h2>
    <section>
        {props.Posts_List.map((page, index) => {
            return (
                <div key={index}>
                    <img src={page.image} alt={page.user_name}/>
                    <p>{page.user_name}</p>
                    <p>{page.text}</p>
                </div>
            )
        })}
    </section>
    <ul>
        {
            
        }
    </ul>
</>
)

}