
import Card_pic from "../Images/beach.jpg"

function Card(){

    return(

        <div className="card">
            <img src={Card_pic} alt="card-pic"/>
            <h4>Carde name</h4>
            <p>
                Beaches are on of the best places to ever be created.
            </p>

        </div>

    )

}

export default Card