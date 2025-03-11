import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

const HostedVans = () => {
    const [hostedVans, setHostedVans] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadHostVans() {
            setLoading(true)
            try{
                const data = await getHostVans()
                setHostedVans(data)
            } catch(err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadHostVans()
    }, [])

    const hostedVansElements = hostedVans.map(van => {        
        return (
            <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={van.id}>
                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                    <div className="host-van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    }) 
    
    if(loading){
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    hostedVans.length > 0 && (
                        <section>
                            {hostedVansElements}
                        </section>
                )}
            </div>
        </section>
    )
}

export default HostedVans