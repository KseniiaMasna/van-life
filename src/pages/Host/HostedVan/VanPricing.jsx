import { use } from "react"
import { useOutletContext } from "react-router-dom"

const VanPricing = () => {
    const van = useOutletContext()
    return (
        <h3 className="host-van-price">${van.price}<span>/day</span></h3>
    )
}

export default VanPricing