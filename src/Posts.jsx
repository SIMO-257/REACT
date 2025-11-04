import Post from "./Post";
import Data from "./Posts_Data.json";

export default function Posts(){
    
 return(
    <section>
        {
         Data.posts_data.map((post,index)=>{
           return(<Post data={post} index={index}/>) 
         })   
        }
    </section>
 )

}
