import { createContext, useState } from "react";
export const mahasiswa = createContext()

export const mahasiswaProvider = (props) => {
    const [mhs, setMhs] = useState('Madan');
    const changeMahasiswa = e => setMhs(e.target.value);
    const mhsState = {mhs, changeMahasiswa};

    return(
        <mahasiswa.Provider value={mhsState}>
        {props.children}
        </mahasiswa.Provider>
    )
}

