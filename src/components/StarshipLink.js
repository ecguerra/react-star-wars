import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import StarshipPage from './StarshipPage'

const StarshipLink = () => {
    const [shipData, setShipData] = useState([])

    useEffect(()=> {
        axios.get('https://swapi.dev/api/starships/').then(res=>{
            // console.log(res.data)
            setShipData(res.data.results)
        })
    },[])

    return shipData.map(ship => (
        <div key={ship.name}>
            <Link
                to={{
                pathname: `/starships/${ship.name}`,
                state: ship
                }}
            >
                {ship.name}
            </Link>
        </div>
    )

    )
}

export default StarshipLink