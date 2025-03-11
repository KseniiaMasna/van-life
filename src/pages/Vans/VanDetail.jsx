import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { getVan } from "../../api"

const VanDetail = () => {
    const {id} = useParams() 
    const {state} = useLocation()
    const [van, setVan] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const search = state?.search || ""
    const type = state?.type || "all"

    
    useEffect(()=>{
        async function loadVans() {
            setLoading(true)
            try{
                const data = await getVan(id)
                setVan(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }                
        }
        loadVans()

    }, [id])

    if(loading){
        return <h1>Loading..</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-detail-container">
            <Link
                to={`..?${search}`}
                relative="path"                
                className="back-button"
                >&larr; <span>Back to {type} vans</span>
            </Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>        
    )
}

export default VanDetail