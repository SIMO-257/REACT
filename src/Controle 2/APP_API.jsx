import React, { Component, useEffect, useState } from "react";
import  Affiche  from "./API/Affiche";
import  FormPost from "./API/FormPost";
import axios from "axios";
export default function APP_API(){

const [listeposts,setListeposts]=useState([{}])

const [post,setPost]=useState({"id":0,"title":'',"author":''})
const [affichage,setAffichage] = useState(true);


const add=(post)=>{

if(post.id!='' && post.title!='' && post.author!='')
{

  axios.post("http://localhost:3004/posts",post).then((res)=>{
   
   if(res.status==201)
   {

    alert("bien ajouter")
    setListeposts([...listeposts,post])
    document.forms[0].reset()

    
   }
   else
   {

    alert("Erreur du BackEnd")

   }
})
}
else
{

  alert('Erreur tout les champs sont obligatoires')

}

}

const editer=(post)=>{

    setPost(post)
    setAffichage(false)

}

const modifier = (newPost) => {

    axios.put("http://localhost:3004/posts/"+newPost.id,newPost).then((res)=>{

    if(res.status==200){

       
        setListeposts(listeposts.map(P=> P.id == newPost.id ? newPost : P ));
        document.forms[0].reset()


    }else {

        alert("Erreur :tout les champs sont obligatoires")

    }})

    setAffichage(true)

    
}


const supprimer=(id)=>{
      
        axios.delete("http://localhost:3004/posts/"+id).then((res)=>{
            if(res.status==200)
            {
         
                const listReste=listeposts.filter(item=>(item.id!=id))
                setListeposts(listReste)

               
            }
            else
            {
                setErrorsupprimer("<span style='color:red'>Erreur de suppression</span>");
            }

        })
    }

useEffect(()=>{

axios.get("http://localhost:3004/posts").then((res)=>{
  
    setListeposts(res.data)

})},[listeposts]);

return(
    <>
      <Affiche listeposts={listeposts} supprimer={supprimer} editer={editer}/>
      <FormPost add={add} modifier={modifier} affichage={affichage} post={post} />  
    </>
)    
}