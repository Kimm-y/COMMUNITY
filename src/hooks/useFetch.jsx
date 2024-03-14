import { useState, useEffect } from 'react'

const useFetch = (url, options)=>{

    const [ data, setData ] = useState(null)


    const fetchData = async ()=>{
        const response = await fetch(url, options)
        const data = await response.json()

        setData(data)
    }

    useEffect(()=>{
        fetchData()
    }, [url])

    return data

}

export default useFetch