import React, { Component, useEffect, useState } from "react";
import { Affiche } from "./API/Affiche";
import axios from "axios";
export default function APP_API(){

const [listeposts,setListeposts]=useState([{}])

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
    console.log(res)

})},[]);

return(
    <>
      <Affiche listeposts={listeposts} supprimer={supprimer} />  
    </>
)    
}