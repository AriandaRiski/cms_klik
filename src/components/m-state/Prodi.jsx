import { useContext } from "react";

// component Prodi
const Prodi = ({prod}) => {
    const props = useContext(prod);    
        return(
            <div className="m-3">                            
                <label className="mr-2">Pilih Prodi</label>
                <select className="select select-accent w-full max-w-xs" value={props.pro} onChange={props.changeProdi}>
                    <option value={"Fakultas Hukum"}>Fakultas Hukum</option>
                    <option value={"Fasilkom"}>Fasilkom</option>
                    <option value={"FEB"}>FEB</option>
                    <option value={"Kedokteran"}>Kedokteran</option>
                </select>                            
            </div>
        )                
    }
export default Prodi