import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <>
            <h1>Star Wars</h1>
            <Link to='/starships' className="waves-effect waves-light btn-large">Starships</Link>
        </>
    )
}

export default Home