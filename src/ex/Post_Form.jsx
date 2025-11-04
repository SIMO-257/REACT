import { useState } from "react"
export default function Form_Post(props){


return(
    <fieldset>
        <table>
            <tr>
                <td><label>user name : </label></td>
                <th><input name="user_name" type="text" onChange={props.Value_Change}/></th>
            </tr>
            <tr>
                <td><label>image : </label></td>
                <th><input name="image" type="file" onChange={props.Value_Change}/></th>
            </tr><tr>
                <td><label>text : </label></td>
                <th><input name="text" type="text" onChange={props.Value_Change}/></th>
            </tr>
        </table><br/>
        <button onClick={props.Add}>Add</button>
    </fieldset>
)

}