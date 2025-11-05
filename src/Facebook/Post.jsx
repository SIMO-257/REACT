import { useState } from "react"



export default function Post(props){

   
const [likes,setLikes] = useState(props.data.likes);
const Increment_like = () => {

    setLikes(prevLikes => prevLikes + 1);

/* jsonReader("./Posts_Data.json", (err,data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

 
    data.posts_data[props.index].likes +=  1;

fs.writeFile("./Posts_Data.json", JSON.stringify(data, null, 2), err => {
    if (err) console.log("Error writing file:", err);
});

}); */
        
        
    }


    return(
        <div className="Post">
            <div className="Head">
                <div>
                    <img className="Profil" src={props.data.profil}/>
                </div>
                <div>
                    <b>{props.data.nom}</b>
                    <p>{props.data.date}</p>
                </div>
               
            </div>
            <div className="Contenu">
                <p>{props.data.description != "" && props.data.description}</p>
                {
                    
                props.data.image != "" && <img src={props.data.image != "" && props.data.image}/>
                    
                }

                
            </div>
            <div className="likes-comms">
                <p onClick={Increment_like}>{likes}👍</p>
                <p>{props.data.comms}<img src="../Icons/commenter.png"/></p>
            </div>
        </div>

    )

}