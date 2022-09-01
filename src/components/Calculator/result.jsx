const Result = ({values, tombol, hasil}) => {
    
    return (
        <>
           <div className="border-b h-20">
                <span>{values.input1}</span>
                <span>{tombol.icon}</span>
                <span>{values.input2}</span>
                <span> = </span>
                <span>{hasil}</span>
            </div>
        </>
    )
}
export default Result