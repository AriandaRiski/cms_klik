import { useState, useEffect } from "react";
import Layout from "@/layouts/Layout";
import Result from "@/components/Calculator/result";
import Input from "@/components/Calculator/input";
import Button from "@/components/Calculator/button";


const Calculator = (e) => {

    const [values, setValues] = useState({
        input1 : Number(0),
        input2 : Number(0)
    })
    const [tombol, setTombol] = useState({aksi:'tambah', icon:'+'})
    const [hasil, setHasil] = useState(0)
    
    
    const Execute = (val,tombol) =>{       
        
        let val1 = Number(val.input1)
        let val2 = Number(val.input2)
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
                    setValues({  
                        input1 : Number(0),
                        input2 : Number(0)
                    })
                    setTombol({aksi:'tambah', icon:'+'})
                }

        }else{
            hasil = val1+val2
        }
        setHasil(hasil)
        }     

    useEffect(() => {
        Execute(values,tombol);
 
     }, [values, tombol]);

     
    return(
        <>
        <Layout>
            <h1>Calculator</h1>
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                    <div className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                    <Result values={values} tombol={tombol} hasil={hasil}/>
                    <Input values={values} tombol={tombol} setValues={setValues}/>
                    <Button setTombol={setTombol}/>
                    </div>                    
                </div>
            </section>
        </Layout>
        </>
    )
}
export default Calculator;