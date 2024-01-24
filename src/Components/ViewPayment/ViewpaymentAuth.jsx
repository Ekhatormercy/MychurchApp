// import { all } from "axios"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"

const ViewpaymentAuth=()=>{
    // const navigate = useNavigate()
    const AllData = JSON.parse(localStorage.getItem("loginData"))
    return(
        AllData.Accountant || AllData.pastor ? <Outlet />: <Navigate to="/home" />
    )
}

export default ViewpaymentAuth