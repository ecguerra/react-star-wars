import {useEffect, useState} from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'

import Loading from './common/Loading'

const CharacterLink = () => {
    const[charData, setCharData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const charUrls = [
        'http://swapi.dev/api/people/?page=1',
        'http://swapi.dev/api/people/?page=2',
        'http://swapi.dev/api/people/?page=3',
        'http://swapi.dev/api/people/?page=4',
        'http://swapi.dev/api/people/?page=5',
        'http://swapi.dev/api/people/?page=6',
        'http://swapi.dev/api/people/?page=7',
        'http://swapi.dev/api/people/?page=8',
        'http://swapi.dev/api/people/?page=9'
    ]
    const charArray = []

    const getChars = async() => {
        try {
            const promises = await charUrls.map(url => axios.get(url))
            const charFullList = await Promise.all(promises)
            // console.log(charFullList[0].data.results)
            const charMap = await charFullList.map(char =>charArray.push(...char.data.results))
            // --- charArray has the data I want --- 
            console.log(charArray)
            const setChar = await Promise.all(charMap)
            // -- setChar confirms everything loaded ---
            console.log(setChar)

            // ??? --- so why does this not set? --- ???
            setCharData(charArray)
      } catch (err) {
            console.log(err)
      } finally {
            // -- this updates, so the function is running correctly ---
            setLoading(false)
            // --- and it doesn't set here either ---
            // setCharData(charArray)
      }

    }
    
    useEffect(()=> {
        getChars()
        // --- it doesn't set if I put it here either ---
        // .then(()=>setCharData(charArray))
    },[])

    const display = () => {
        if(loading) {
            return <Loading />
        } else {
            return charData.map(char => {
                <div>{char.name}</div>
            })}
    }

    return(
        <div>
            <h1>Characters</h1>
            {display()}
        </div>
    )
}

export default CharacterLink