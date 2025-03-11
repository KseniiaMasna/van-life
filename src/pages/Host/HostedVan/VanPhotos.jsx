import { useOutletContext } from "react-router-dom"

const VanPhotos = () => {
    const van = useOutletContext()
    return (
        <img src={van.imageUrl} className="host-van-detail-image" />
    )
}

export default VanPhotos