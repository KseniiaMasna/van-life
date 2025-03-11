import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

const Vans = () => {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {        
        async function loadVans() {
            const data = await getVans()
            setVans(data)
        }
        loadVans()
    }, [])

    const filter = searchParams.get('type')
    const filteredVans = filter 
        ? vans.filter(van => van.type.toLowerCase() === filter.toLowerCase())
        : vans        
    

    const vanElements = filteredVans.map(van => {
        return (
            <div key={van.id} className="van-tile">
                <Link to={van.id} 
                    state={{search: searchParams.toString(), 
                    type: filter
                    }}>
                    <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

    const handleFilter = (key, value) => {
        setSearchParams(prevParam => {
            if(value === null){
                prevParam.delete(key)
            } else {
                prevParam.set(key, value)
            }
            return prevParam
        })
    }

    

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={() => handleFilter("type", "simple")}
                    className={`van-type simple ${filter === "simple" && "selected"}`}
                >Simple</button>

                <button 
                    onClick={() => handleFilter("type", "luxury")}
                    className={`van-type luxury ${filter === "luxury" && "selected"}`}
                >Luxury</button> 

                <button 
                    onClick={() => handleFilter("type", "rugged")}
                    className={`van-type rugged ${filter === "rugged" && "selected"}`}
                >Rugged</button> 

                {filter ? 
                    (<button
                        onClick={() => setSearchParams({})}
                        className="van-type clear-filters"
                    >Clear</button>) : null
                }        
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans