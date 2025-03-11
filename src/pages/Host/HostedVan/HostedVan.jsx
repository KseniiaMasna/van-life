import { useParams, NavLink, Link, Outlet } from "react-router-dom"
import { useEffect , useState} from "react"
import { getVan } from "../../../api"

const HostedVan = () => {
    const {id} = useParams()
    const [hostedVan, setHostedVan] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        async function loadHostVan() {
            setLoading(true)
            try{
                const data = await getVan(id)
                setHostedVan(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadHostVan()
    }, [id])

    if(loading){
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        hostedVan 
            ? 
            <section className="van-detail-container"> 
                <Link
                    to=".."
                    relative="path"
                    className="back-button"
                    >&larr; <span>Back to all vans</span>
                </Link>

                <div className="host-van-detail-layout-container">
                    <div className="host-van-detail">
                        <img src={hostedVan.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${hostedVan.type}`}
                            >
                                {hostedVan.type}
                            </i>
                            <h3>{hostedVan.name}</h3>
                            <h4>${hostedVan.price}/day</h4>
                        </div>
                    </div>
                    <nav className="host-van-detail-nav">
                        <NavLink
                            className={({isActive}) => isActive ? 'active-link' : ''} 
                            to=".">Details</NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-link' : ''} 
                            to="pricing">Pricing</NavLink>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-link' : ''} 
                            to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={hostedVan}/>
                </div>
            </section>
            : <h1>Loading...</h1>
    )
}

export default HostedVan