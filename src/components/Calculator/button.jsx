const Button = ({setTombol}) => {
    
    const btnHandleAction  = (e) => {
        setTombol(e)
    }
   
    return (
        <>
            <div className="border-b h-20 flex justify-around">
                <button className="rounded-full w-20 bg-slate-300" onClick={()=>btnHandleAction({aksi:'tambah', icon:'+'})}>+</button>
                <button className="rounded-full w-20 bg-slate-300" onClick={()=>btnHandleAction({aksi:'kurang', icon:'-'})}>-</button>
                <button className="rounded-full w-20 bg-slate-300" onClick={()=>btnHandleAction({aksi:'bagi', icon:':'})}>:</button>
                <button className="rounded-full w-20 bg-slate-300" onClick={()=>btnHandleAction({aksi:'kali', icon:'*'})}>*</button>
                <button className="rounded-full w-20 bg-slate-300" onClick={()=>btnHandleAction({aksi:'clear', icon:'C'})}>C</button>
            </div>
        </>

    )
}
export default Button