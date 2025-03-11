import { Outlet } from "react-router-dom"
import HostNavBar from "./HostNavBar"

const HostLayout = () => {

    return (
        <>
            <HostNavBar />
            <Outlet />
        </>
    )
}

export default HostLayout