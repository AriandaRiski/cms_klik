import Layout from "@/layouts/Layout"
import { createContext, useState } from "react"
import Mahasiswa from "@/components/m-state/Mahasiswa"
import Fakultas from "@/components/m-state/Fakultas"
import Prodi from "@/components/m-state/Prodi"
import Card from "@/components/m-state/Card"

import { mahasiswaProvider } from "@/components/Context/MhsContext"


// const mahasiswa = createContext()
const fakultas = createContext()
const prod = createContext()

const Index = () =>{

    // const [mhs, setMhs] = useState('Madan');
    // const changeMahasiswa = e => setMhs(e.target.value);
    // const mhsState = {mhs, changeMahasiswa};

    const [fks, setFakultas] = useState('Hukum');
    const changeFakultas = e => setFakultas(e.target.value);
    const fakultasState = {fks, changeFakultas};

    const [pro, setProdi] = useState('Hukum');
    const changeProdi = e => setProdi(e.target.value);
    const prodiState = {pro, changeProdi};

    return(
        <Layout>
            <mahasiswaProvider>
                <fakultas.Provider value={fakultasState}>
                    <prod.Provider value={prodiState}>
                        <section className="bg-white border-b py-8">
                            <div className="container mx-auto flex flex-wrap pt-4 pb-8">                                
                                <h2>Management State</h2>
                                <div className="grid grid-flow-row auto-rows-max bg-black">
                                    <Mahasiswa />
                                    {/* <Fakultas fakultas={fakultas}/>
                                    <Prodi prod={prod}/> */}
                                    <Card/>
                                </div>
                            </div>
                        </section>
                    </prod.Provider>
                </fakultas.Provider>
            </mahasiswaProvider>
        </Layout>
    )
}


// const Card = () => {
//     const props = useContext(mahasiswa);
//     const fak = useContext(fakultas);
//     const prd = useContext(prod);
        
//     return(
//         <div className="pl-10">
//             <h2>Hasil</h2>
//             {/* Mahasiswa : {props.mhs}<br/> */}
//             Fakultas : {fak.fks}<br/>
//             Prodi : {prd.pro}<br/>
//         </div>
//     )        
// }

export default Index