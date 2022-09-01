const Input = ({values, tombol, setValues}) => {

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})
    }

return (
    <>
        <div className="h-20">
            <input className="border w-2/6 justify-content: center;" type="number" name="input1" value={values.input1} onChange={handleInputChange}/>
            <span> {tombol.icon} </span>
            <input className="border w-2/6" type="number" name="input2" value={values.input2} onChange={handleInputChange}/>
        </div>                    
    </>
)
}
export default Input;