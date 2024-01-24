import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
// import Error from "./Error"

const ManageMembersAuth=()=>{
    // const navigate = useNavigate()
    const AllData = JSON.parse(localStorage.getItem("loginData"))
    return(
        AllData.pastor || AllData.Admin? <Outlet />: <Navigate to="/home" />
    )
}

export default ManageMembersAuth