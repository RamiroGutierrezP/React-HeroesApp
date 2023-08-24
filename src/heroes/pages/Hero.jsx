import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById} from "../helpers";
import { useMemo } from "react";

export const Hero = () => {

    const { id } = useParams();

    const hero = useMemo(() => getHeroesById( id ), [ id ]);

    const navigate = useNavigate();

    const handleReturn = () => {
      (hero.publisher === 'Marvel Comics')
        ? navigate('/marvel')
        : navigate('/dc')      
    }

    if ( !hero ){
        return <Navigate to="/" />
    }

    return (
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`../heroes/${id}.jpg`}
            alt={`${hero.superhero}`}
            className="img-thumbnail animate__animated animate__fadeInLeft" 
          />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b> { hero.alter_ego }</li>
            <li className="list-group-item"><b>Publisher: </b> { hero.publisher }</li>
            <li className="list-group-item"><b>First appearence: </b> { hero.first_appearance}</li>
          </ul>

          <button 
            className="btn btn-outline-dark mt-5"
            onClick={ handleReturn }
          >
            Return
          </button>
        </div>

      </div>
    )
}
