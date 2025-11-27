import Nav from "./Nav";
import Barre from "./Barre";
import Posts from "./Posts";
import Amis from "./Amis";

export default function Facebook(){

return(
    <>
    <Nav/>
    <div className="layout">
        <Barre/>
        <Posts/>
        <Amis/>
    </div>

    </>
)

}