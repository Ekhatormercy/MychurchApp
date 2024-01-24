// import { all } from "axios"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"

const PayOfferingAuth=()=>{
    // const navigate = useNavigate()
    const AllData = JSON.parse(localStorage.getItem("loginData"))
    return(
        AllData?.pastor || AllData?.Admin || AllData?.member || AllData?.usher  ||AllData?.Accountant ? <Outlet />: <Navigate to="/home" />
    )
}

export default PayOfferingAuth