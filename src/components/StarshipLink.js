import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Loading from './common/Loading'

const StarshipLink = () => {
    const [shipData, setShipData] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        axios.get('https://swapi.dev/api/starships/').then(res=>{
            // console.log(res.data)
            setShipData(res.data.results)
        }).then(()=>setLoading(false))
    },[])

    const display = () => {
        if(loading) {
            return <Loading />
        } else {
            return shipData.map(ship => (
                    <Link
                        className='waves-effect waves-light btn-large col s12 m6 l4'
                        key={ship.name}
                        to={{
                        pathname: `/starships/${ship.name}`,
                        state: ship
                        }}
                    >
                        {ship.name}
                    </Link>
            ))
        }
    }

    return (
        <div className='container'>
            <h2>Starships</h2>
            <div className='row'>
                {display()}
            </div>
        </div>
    )
}

export default StarshipLink