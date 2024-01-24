import React, { useState } from 'react';
import './Offering.css';

const Churchpayment = () => {
    const [money, setMoney]= useState()
    const [name, setName] = useState()
    const [prayer, setPrayer] = useState(false)
    const [offering, setOffering] = useState(false)
    const [tithe, setTithe] = useState(false)
    const [project, setProject] = useState(false)
    const [lessprivilege, setLessPrivilege] = useState(false)

    const handlePay=()=>{
        const allData = {
            money,
            name,
            prayer,
            offering,
            tithe,
            project,
            lessprivilege
        }

        // localStorage.setItem("churchMoney", JSON.stringify(allData))
        // const oldData = JSON.parse(localStorage.getItem("PastorMoney")) || [];
        const oldData = JSON.parse(localStorage.getItem("PastorMoney")) || [];
                    const newData = [...oldData, allData]
                    localStorage.setItem("PastorMoney", JSON.stringify(newData))
    }

 return (
    
    <div className='Wrapperzz'>
        <div className='Backgroundholder'>
            <img src="https://media.istockphoto.com/id/1459205026/photo/one-tenth-or-tithe-is-basis-on-which-bible-teaches-us-to-give-one-tenth-of-first-fruit-to-god.webp?b=1&s=170667a&w=0&k=20&c=_28d5J1ioHYksdkm8KwVnzHwcCAz5vj3Adi9V3qxwK8=" alt="" />     
        </div>
        <div className='Containergh'>
            <div className='Tittlexc'>
                Sending Money   
            </div>

            <div className='Send2'>
                How much do you want to give?
                <input type="text" placeholder='input your amount' value={money} onChange={(e)=>setMoney(e.target.value)}/>

                <div className='Amountholderx'>

                <div className='Cardholder1'>
                     <h3>OFFERING</h3>
                        <input type="checkbox" onChange={()=>setOffering(!offering)}/>
                </div>
                <div className='Cardholder2'>
                     <h3>TITHE</h3>
                     <input type="checkbox" onChange={()=>setTithe(!tithe)}/>
                </div>
                <div className='Cardholder3'>
                     <h3>PROJECT</h3>
                     <input type="checkbox" onChange={()=>setProject(!project)}/>
                </div>
                <div className='Cardholder4'>
                    <p>less privilege</p>
                    <input type="checkbox" onChange={()=>setLessPrivilege(!lessprivilege)}/>
                </div> 

                </div>

              
            </div>
            <div className='xxx'>
                <div className='Caption'>
                        From
                </div>

                <input type="text" placeholder='your name' id='mmm2' value={name} onChange={(e)=>setName(e.target.value)}/>

                <div className='Receiving'>
                        Prayer Request
                </div>

                <input type="text" id='mmm3' value={prayer} onChange={(e)=>setPrayer(e.target.value)}/>

                <div className='Sendholder'>
                    <div className='Amount' onClick={handlePay}>
                        <h4>PAY</h4>
                    </div>

                </div>
            </div>

            



        </div>
    </div>
 );
};

export default Churchpayment;