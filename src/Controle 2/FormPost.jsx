import { useState ,useEffect } from "react";
export default function FormPost(props){

const [post,setPost]=useState({"id":0,"title":'',"author":''})
 
const getValue=(e)=>{
    setPost(prevPost=>({
      ...prevPost,
      [e.target.name]:e.target.value
    }))
}

useEffect(() => {

if (props.post) {

  setPost(props.post);

}}, [props.post]); 



    return(

     <div>
    <fieldset>
      <legend>Add new Post</legend>
      <form>
        <input placeholder="Id" type="number" name="id"  onChange={getValue} value={post.id} /><br/><br/>
        <input placeholder="Title" type="text"  name="title" onChange={getValue} value={post.title} /><br/><br/>
        <input placeholder="Author" type="text"  name="author"  onChange={getValue} value={post.author} /><br /><br/>
        {props.affichage ? <input value="Ajouter" type="button" onClick={()=>props.add(post)}  /> : <input value="Modifier" type="button" onClick={()=>props.modifier(post)}  />}
      </form>
      </fieldset>
      </div>
     
     );
 

}