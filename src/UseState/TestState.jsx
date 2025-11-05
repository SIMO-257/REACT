import  React , { Component } from "react";

export default class TestState  extends Component{
    constructor(){
        super();
        this.state = {
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
          
        }
    }render(){
        return (
        <>
        <fieldset>
            <legend>Produit Détails</legend>
            <p>Id: {this.state.produit.Id}</p>
            <p>Nom: {this.state.produit.Nom}</p>
            <p>QteStock: {this.state.produit.QteStock}</p>
            <p>Prix: {this.state.produit.Prix}</p>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Liste Villes</legend>
            <ol>
            {
                this.state.villes.map(ville =>{

                    return(<li>{ville}</li>)
                    
                }
                    
                )
            }
            </ol>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Liste Client</legend>
            <table border={1}>
            <thead>
                <tr><th>Nom</th><th>Tel</th></tr>
            </thead>
            <tbody>
             {
                
                this.state.clients.map(client =>{

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
}