import "./ManageMem.css"
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
const ManageMember = () => {

   
    const members = JSON.parse(localStorage.getItem("churchGoers"))
    console.log(members)
    return (
        <>
            <div className="ManagaMem">
                <div className="Memwrap">
                    <div className="Memmwrap">
                        <div className="Memtitle">
                            <h1>MEMBER MANAGEMENT</h1>
                        </div>
                        <div className="NPED">
                            <div className="NameMem1">
                                <h1>Names Of Members </h1> <h1>Position</h1>

                            </div>

                            {
                                members.map((e)=>(
                                    <div className="NameMem">
                                <h1>{e.firstName} :</h1> <h1>{
                                    e.usher?"Usher": e.Accountant?"Accountant":e.Admin?"Admin": e.members?"Member":null
                                    } </h1>
                                <div className="deic">
                                <AiFillDelete className="del" />
                                <RiEdit2Fill  className="edi"/>
                                </div>
                            </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ManageMember