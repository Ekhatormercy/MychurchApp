import "./ViewAttendance.css"
const ViewAttendance = () => {
    return (
        <>
            <div className="AtteM">
                <div className="Attwrapper">
                    <h1>Attendance</h1>
                    <div className="attenlist">
                    <div className="Atten1">
                        <div className="aawrap">
                        <h2>Total Num of Men:</h2>
                        <h3>80</h3>
                        </div>
                    </div>
                    <div className="Atten1">
                    <div className="aawrap">
                        <h2>Total Num of Women:</h2>
                        <h3>120</h3>
                        </div>
                    </div>
                    <div className="Atten1">
                    <div className="aawrap">
                        <h2>Total Num of Children:</h2>
                        <h3>100</h3>
                        </div>
                    </div>
                    <div className="Atten2">
                    <div className="aawrap">
                        <h2>Total Number of Members:</h2>
                        <h3 className="three">300</h3>
                        </div>
                    </div>
                    </div>
                    <div className="attebtn">
                        <button className="bbbtn">Go back to Home</button>
                        <button className="bbtn">Back to Service Attendance Page</button>

                    </div>
                </div>
            </div>

        </>
    )
}
export default ViewAttendance