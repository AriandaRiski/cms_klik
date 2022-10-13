import Layout from "@/layouts/Layout"
import { createContext, useState } from "react"

const mahasiswa = createContext()
const fakultas = createContext()
const prod = createContext()


const Index = () =>{

    const [mhs, setMhs] = useState('Madan');
    const changeMahasiswa = e => setMhs(e.target.value);
    const mhsState = {mhs, changeMahasiswa};

    const [fks, setFakultas] = useState('Hukum');
    const changeFakultas = e => setFakultas(e.target.value);
    const fakultasState = {fks, changeFakultas};

    const [pro, setProdi] = useState('Hukum');
    const changeProdi = e => setProdi(e.target.value);
    const prodiState = {pro, changeProdi};

    return(
        <Layout>
            <mahasiswa.Provider value={mhsState}>
                <fakultas.Provider value={fakultasState}>
                    <prod.Provider value={prodiState}>
                        <section className="bg-white border-b py-8">
                            <div className="container mx-auto flex flex-wrap pt-4 pb-8">                                
                                <h2>Management State</h2>
                                <div className="grid grid-flow-row auto-rows-max bg-black">
                                    <Mahasiswa/>
                                    <Fakultas/>
                                    <Prodi/>
                                    <Card/>
                                </div>
                            </div>
                        </section>
                    </prod.Provider>
                </fakultas.Provider>
            </mahasiswa.Provider>
        </Layout>
    )
}

// component mahasiswa
const Mahasiswa = () => {
    return(
        <mahasiswa.Consumer>
            {
                (props) => {
                    return(
                        <div className="m-3">                            
                            <label className="mr-2">Pilih Mahasiswa</label>
                            <select className="select select-accent w-full max-w-xs" value={props.mhs} onChange={props.changeMahasiswa}>
                                <option value={"Ramadhansyah"}>Ramadhansyah</option>
                                <option value={"Kadarisman"}>Kadarisman</option>
                                <option value={"Irlan"}>Irlan</option>
                                <option value={"Riski"}>Riski</option>
                            </select>
                            
                        </div>
                    )
                }
            }
        </mahasiswa.Consumer>
    )
}

// component fakultas
const Fakultas = () => {
    return(
        <fakultas.Consumer>
            {
                (props) => {
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
            }
        </fakultas.Consumer>
    )
}


// component Prodi
const Prodi = () => {
    return(
        <prod.Consumer>
            {
                (props) => {
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
            }
        </prod.Consumer>
    )
}

const Card = () => {
    return(
        <mahasiswa.Consumer>
            {
                props =>{
                    return(
                        <fakultas.Consumer>
                            {
                                (fak) => {
                                    return(
                                        <prod.Consumer>
                                            {
                                                (prd) => {
                                                    return(
                                                        <div className="pl-10">
                                                            <h2>Hasil</h2>
                                                            Mahasiswa : {props.mhs}<br/>
                                                            Fakultas : {fak.fks}<br/>
                                                            Prodi : {prd.pro}<br/>
                                                        </div>
                                                    )
                                                }
                                            }
                                        </prod.Consumer>
                                    )
                                }
                            }
                        </fakultas.Consumer>
                    )
                }
            }
        </mahasiswa.Consumer>
    )
}

export default Index