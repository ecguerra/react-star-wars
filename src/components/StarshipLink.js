import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Loading from './common/Loading'

const StarshipLink = () => {
    const [shipData, setShipData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const url1 = 'http://swapi.dev/api/starships/?page=1'
        const url2 = 'http://swapi.dev/api/starships/?page=2'
        const url3 = 'http://swapi.dev/api/starships/?page=3'
        const url4 = 'http://swapi.dev/api/starships/?page=4'
        const shipArray = []

        Promise.all([axios.get(url1),axios.get(url2),axios.get(url3),axios.get(url4)])
        .then(res=>{
            res.map(res=>shipArray.push(...res.data.results))
            // console.log(res.data)
            setShipData(shipArray)
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