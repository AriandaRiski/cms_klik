const Input = ({nilai, updateNilai}) => {
console.log(nilai)
console.log(updateNilai)

const handleInput = (e) => {
    setNilai({
        ...nilai,
        newNilai,
    })
}
return (
    <>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" >            
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-start">        
                    <input className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    // name={a}
                    // value={a}
              onChange={(e) => {updateNilai({
                    input1: e.target.value})
                }}                    
            // onChange={handleInput}
                    />
                    <h1>vfdjbkslf</h1>
                    <input className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"/>
                </div>
            </div>
        </div>      
        
    </>
)
}
export default Input;