import { useDispatch, useSelector } from "react-redux";
import { Incrementer, Decrementer } from "./reducer";
export default function Compteur() {

    const dispatch = useDispatch();
    const Compt = useSelector((state) => state.Compteur)


    return (<>

        <h1>
            <i>
                <u>Compteur:</u>
            </i>
        </h1>
        <h4>{Compt}</h4>
        <button onClick={() => dispatch(Incrementer(1))}>Incrementer</button>
        <button onClick={() => dispatch(Decrementer(1))}>Decrementer</button>


    </>)
}