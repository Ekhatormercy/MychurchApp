import { useState } from 'react'
import './Attendance.css'

// import img from './churchapp/src/assets/pexels-pixabay-372326.jpg';

const Attendance = () =>{
  const [Male, setMale] = useState()
  const [female, setfemale] = useState()
  const [children, setchildren] = useState()

  const handleAttendance =()=>{
    const todayAttendance={
      Male,
      female,
      children,
    }

     localStorage.setItem("sundayattendance", JSON.stringify(todayAttendance))
    console.log(todayAttendance)
  }


    return (
    <>
    <div className="Body">
    
    
    <div className="Container1x">
    <h1>New Heaven</h1>
    <div className="listfg">
    <h2>MEMBERS ATTENDANCE</h2>
    
    
    </div>
    <div class="input-boxdx">
              <label>Numbers of Male</label>
              <input type="number" placeholder="Males" value={Male} onChange={(e)=> setMale(e.target.value)} required />
            </div>
    
            <div class="input-boxdx">
              <label>Numbers of Female</label>
              <input type="number" placeholder="Females" value={female} onChange={(e)=> setfemale(e.target.value)} required />
            </div>
    
    
    
            <div class="input-boxdx">
              <label>Numbers of Children</label>
              <input type="number" placeholder="Children" value={children} onChange={(e)=> setchildren(e.target.value)} required />
            </div>
    
            <button className="btnxx" onClick={handleAttendance}>SUBMIT</button>
    </div>
    
    
    
    
    </div>
    
    
    
    
    </>
    )
    }
    export default Attendance