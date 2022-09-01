import Layout from "@/layouts/Layout";
import Input from '@/components/Calculator/input'
import { useState } from "react";

const Calculator = () => {
    const [nilai, setNilai] = useState({
        input1: 0,
        input2: 0
    });
    const [aksi, setAksi] = useState('');
    const [hasil, setHasil] = useState('');

    const updateNilai = (newNilai) => {
        setNilai({
            ...nilai,
            newNilai,
        })
    }
    
    return(
        <>
        <Layout>
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                        {/* <Result nilai={nilai}/> */}
                    </h2>
                    
                    <Input nilai={nilai} setNilai={setNilai}/>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    
                </div>
            </section>
        </Layout>
        </>
    )
}
export default Calculator;