import "./Landingpage.css"
// import './landingpage.css'
import { useNavigate } from "react-router-dom"
const Landingpage = () => {

    const navigate = useNavigate()
    const go=()=>{
        navigate("/login")
    }
    const go2=()=>{
        navigate("/signup")
    }
    return (
        <>
            <div className="landBox">
                <div className="laMid">
               <h1>WELCOME TO <br /> HILLSONG CHURCH</h1>
                </div>
                <div className="Logsign">
                    <button className="btn" onClick={go}>LOG IN</button>
                 
                    <span> Don't have an Account? </span>
                     <h1 onClick={go2}>SIGN UP</h1>
                
                </div>

            </div>
        </>
    )
}
export default Landingpage