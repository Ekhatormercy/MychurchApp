import './Viewpayment.css'

const Payment = () =>{
    const SweetMoney = JSON.parse(localStorage.getItem("PastorMoney"))
    // console.log(SweetMoney)
    return (
    <>
    <div className="Body">
        <div className="Container">
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Payment type</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {
                        SweetMoney?.map((e)=>(
                            <tr>
                        <td>*</td>
                        <td>{e.name}</td>
                        <td>{e.money}</td>
                        <td>{
                            e.offering?"Offering":e.project?"Project":e.tithe?"Tithe":e.lessprivilege?"Lessprivilege": null
                            

                            }</td>
                        <td>08-01-2024</td>
                    </tr>
                        ))
                    }
                       {/* <tr>
                        <td>*</td>
                        <td>name</td>
                        <td>money</td>
                        <td>
                            "Offering" "Project" "Tithe" "Lessprivilege"
                            

                            </td>
                        <td>08-01-2024</td>
                    </tr> */}

                </tbody>
            </table>
    
        </div>
    </div>
    
    
    </>
    )
    }
    
    export default Payment