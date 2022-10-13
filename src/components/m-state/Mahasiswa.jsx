import { useContext } from "react"
import { MhsContext } from "@/components/Context/MhsContext";


// component mahasiswa
const Mahasiswa = () => {

    const mahasiswa = useContext(MhsContext);

    return(       
            <div className="m-3">                            
                <label className="mr-2">Pilih Mahasiswa</label>
                <select className="select select-accent w-full max-w-xs" value={mahasiswa} onChange={mahasiswa}>
                    <option value={"Ramadhansyah"}>Ramadhansyah</option>
                    <option value={"Kadarisman"}>Kadarisman</option>
                    <option value={"Irlan"}>Irlan</option>
                    <option value={"Riski"}>Riski</option>
                </select>
                
            </div>                  
        )
    }
export default Mahasiswa