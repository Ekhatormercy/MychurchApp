import "./homepage.css"
import { useNavigate } from "react-router-dom"
const HomePage = () => {
    const navigate = useNavigate()
    const go=()=>{
        navigate("/pay")
    }
    const go1=()=>{
        navigate("/attend")
    }
    const go2=()=>{
        navigate("/offering")
    }
    const go3=()=>{
        navigate("/viewattend")
    }
    const go4=()=>{
        navigate("/manage")
    }

    const user = JSON.parse(localStorage.getItem("loginData"))
    // const empty = 

    const handleLogout=()=>{
        localStorage.removeItem("loginData")
        navigate("/login")
    }

    return (
        <>
        <div className="Header">
            <div className="Header2">
                    <div className="hwrapper">
                        <h1>Hillsong <br /> <span>Church</span></h1>
                        <div className="list">
                            <div>Home</div>
                            <div onClick={go2}>Pay Offering</div>
                            <div onClick={go1}>Service Attendace</div>
                            <div onClick={go}>View Payment</div>
                            <div onClick={go4}>Manage Member</div>
                            <div onClick={go3}>View Attendance</div>
                        </div>
                        <button className="lgbtn" onClick={handleLogout}>Log Out</button>
                    </div>
                </div>

                <div className="Homepage">
                    
                            <div className="hbox">
                    <div className="Hmid">
                        <div className="name">
                            <div className="circle">
                                <h1 id="circleb">{user.firstName.charAt()}</h1>
                            </div>
                            <h1>Welcome {user.firstName}</h1>
                        
                        </div>
                        <h1>Hillsong Church</h1>

                    </div>
                    <div className="Hright">
                        <h1>KEEP FAITH ALWAYS</h1>
                    </div>
                </div>
                      

                </div>
        </div>

        </>
    )
}
export default HomePage