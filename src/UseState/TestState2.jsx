import { useState } from "react";
export default function TestState2(){
    const [data,setData] = useState({
            produit:{
                Id: 1,
                Nom :"Produit1",
                QteStock : 40,
                Prix : 15.3
            },
            villes:[
                "Casa",
                "Paris",
                "Madrid"
            ],
            clients:[
                {Nom : "client1",Tel:"06 01 01 02"},
            {Nom : "client2",Tel:"06 02 02 03"},
                {Nom : "client3",Tel:"06 03 03 04"},
            ]
        })
    return (
          <>
        <fieldset>
            <legend>Produit Détails</legend>
            <p>Id: {data.produit.Id}</p>
            <p>Nom: {data.produit.Nom}</p>
            <p>QteStock: {data.produit.QteStock}</p>
            <p>Prix: {data.produit.Prix}</p>
        </fieldset>
        <fieldset>
            <legend>Liste Villes</legend>
            <ol>
            {
               data.villes.map(ville =>{

                    return(<li>{ville}</li>)
                    
                }
                    
                )
            }
            </ol>
        </fieldset>
        <fieldset>
            <legend>Liste Client</legend>
            <table border={1}>
            <thead>
                <tr><th>Nom</th><th>Tel</th></tr>
            </thead>
            <tbody>
             {
                
                data.clients.map(client =>{

                    return(
                        <tr>
                            <td>{client.Nom}</td>
                            <td>{client.Tel}</td>
                        </tr>    
                    )
                    
                }
                    
                )
                
            }
            </tbody>
            </table>
        </fieldset>
        </>
    )
}