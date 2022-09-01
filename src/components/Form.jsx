import { useState, useEffect } from "react";
const initialValues = {
  title : "",
  body : "",
}

// const Form = ({callback, update, submit}) => {
const Form = ({blogs, setBlogs, submit, setSubmit}) => {
    
    const [value, setValue] = useState (initialValues)

    useEffect(() => {        
      if(submit){
        setValue({title: submit.title,  body: submit.body})       
      } else {
        setValue(initialValues)
      }
    }, [setValue, submit]);

    

   
    const handleSubmit = (e) => {
      e.preventDefault()
      // console.log(submit);
       if(submit.id){
            const newBlogs = [...blogs]
            const blogsByid = newBlogs.findIndex((b => b.id == submit.id));
            newBlogs[blogsByid].title = value.title
            newBlogs[blogsByid].body = value.body
            console.log(newBlogs);
            setBlogs(newBlogs);
            setValue(initialValues)
            setSubmit('')
        }else{
            const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : value.title, 'body' : value.body}]
            const sortDesc = [...NewData]
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
            setBlogs(sortDesc)
            setValue(initialValues)            
        }
    }

    
   
    return (
        <>
        {/* component */}
        <form className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink bg-white"  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2"  htmlFor="Title">
              Title
            </label>            
            <input 
              name ="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
              value={value.title} 
              type="text"
              placeholder="Title" 
              onChange={(e) => setValue({title:e.target.value, body:value.body})}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="Description"
            >
              Description
            </label>
            <input
              name="body"
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3"
              id="Description"
              type="Description"
              placeholder="Description"
              value={value.body} 
              onChange={(e) => setValue({body:e.target.value,title:value.title})}
            />            
          </div>
          <div className="flex items-center">
            <button
              className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out "
              // type="button" onClick={(e) => tambah(e)}
              type="submit"
            >
              Insert
            </button>       
            
          </div>
        </form>
      </>
      
    )
}

export default Form;