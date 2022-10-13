import { useContext } from "react";
import { MhsContext } from "../Context/MhsContext";

const Card = () => {
    const mahasiswa = useContext(MhsContext);
    
    // const fak = useContext(fakultas);
    // const prd = useContext(prod);
    return(
        <div className="pl-10">
            <h2>Hasil</h2>
            Mahasiswa : {mahasiswa}<br/>
           
        </div>
    )        
}
export default Card;