export default function Carte({data}){

    return (
         <section>
            <div>
                <img className="Profil" src={data.Profil}/>
            </div>
            <div>
                <p>{data.Description}</p>
            </div>
            <button>Like</button>
            <button>Dislike</button>
        </section>

    )
}