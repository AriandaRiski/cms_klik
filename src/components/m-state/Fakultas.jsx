import { useContext } from "react";
// component fakultas

const Fakultas = ({fakultas}) => {
    const props = useContext(fakultas);
        return(
            <div className="m-3">                            
                <label className="mr-2">Pilih Fakulas</label>
                <select className="select select-accent w-full max-w-xs" value={props.fks} onChange={props.changeFakultas}>
                    <option value={"Hukum"}>Hukum</option>
                    <option value={"IT"}>IT</option>
                    <option value={"Ekonomi"}>Ekonomi</option>
                    <option value={"Psikologi"}>Psikologi</option>
                </select>                            
            </div>
        )                
    }
export default Fakultas