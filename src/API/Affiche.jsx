export function Affiche(props){
    return(
        <>
            <table border={1}>
            <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
            </thead>
            <tbody>
                {props.listeposts.map((post)=>{
                    return (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>
                                <button onClick={()=> props.supprimer(post.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}