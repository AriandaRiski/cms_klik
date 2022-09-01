import Layout from "@/layouts/Layout";
import { useState, useEffect } from "react";

const initialValues = {
    input1 : Number(0),
    input2 : Number(0)
}

const Calculator = (e) => {

    const [values, setValues] = useState(initialValues)
    const [tombol, setTombol] = useState({aksi:'tambah', icon:'+'})
    const [hasil, setHasil] = useState(0)
    
    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})

    }

    const btnHandleAction  = (e) => {
        setTombol(e)
    }

    const Execute = (tombol) =>{       
        
        let val1 = Number(values.input1)
        let val2 = Number(values.input2)
        hasil = 0

        if(tombol){

            if(tombol.aksi == 'tambah'){
                hasil = val1+val2
            } else if(tombol.aksi == 'kurang'){
                hasil = val1 - val2
            } else if(tombol.aksi == 'kali'){
                hasil = val1 * val2;
            } else if( tombol.aksi == 'bagi'){
                hasil =  val1 / val2
            } else if(tombol.aksi == 'clear'){
                setValues(initialValues)
                setTombol({aksi:'tambah', icon:'+'})
            }
        }else{

            hasil = val1+val2
        }
        setHasil(hasil)
     }     

    useEffect(() => {
        Execute(tombol);
 
     }, [values, tombol]);

     


    return(
        <>
        <Layout>
            <h1>Calculator</h1>
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                    <div className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                    <div className="border h-20">
                            <span>{values.input1}</span>
                            <span>{tombol.icon}</span>
                            <span>{values.input2}</span>
                            <span>=</span>
                            <span>{hasil}</span>


                    </div>
                        <div className="border h-20">
                            <input className="border w-24" name="input1" value={values.input1} onChange={handleInputChange}/>
                            <span>{tombol.icon}</span>
                            <input className="border w-24" name="input2" value={values.input2} onChange={handleInputChange}/>

                        </div>                    
                    

                        <div className="border h-20 flex justify-around">
                            <button className="rounded-none bg-slate-100" onClick={()=>btnHandleAction({aksi:'tambah', icon:'+'})}>+</button>
                            <button className="rounded-none bg-slate-200" onClick={()=>btnHandleAction({aksi:'kurang', icon:'-'})}>-</button>
                            <button className="rounded-none bg-slate-300" onClick={()=>btnHandleAction({aksi:'bagi', icon:':'})}>:</button>
                            <button className="rounded-none bg-slate-300" onClick={()=>btnHandleAction({aksi:'kali', icon:'*'})}>*</button>
                            <button className="rounded-none bg-slate-300" onClick={()=>btnHandleAction({aksi:'clear', icon:'C'})}>C</button>
                        </div>
                        

                    </div>                    
                </div>
            </section>
        </Layout>
        </>
    )
}
export default Calculator;