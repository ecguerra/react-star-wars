import {Link} from 'react-router-dom'

const StarshipPage = ({location:{state}}) => {
    // let info = props.location.state.ship

    return(
        <div className="row">
            <div className="col s12 m6 l4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    {console.log(state)}
                        <h1 className='card-title'>{state.name}</h1>
                        <p>{state.model} - {state.manufacturer}</p>
                        <p>length: {state.length}</p>
                        <p>passengers: {state.passengers}</p>
                        <p>crew: {state.crew}</p>
                        <div className='card-action'>
                            <Link to='/starships'>Return to List</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StarshipPage