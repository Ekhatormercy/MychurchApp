// import { all } from "axios"
// import { all } from "axios"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"

const TakeAttendance=()=>{
    // const navigate = useNavigate()
    const AllData = JSON.parse(localStorage.getItem("loginData"))
    return(
        AllData.usher || AllData.pastor? <Outlet />: <Navigate to="/home" />
    )
}

export default TakeAttendance