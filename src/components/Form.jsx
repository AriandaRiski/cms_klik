import { useState } from "react";


// const Form = ({callback, update, submit}) => {
const Form = ({blogs, setBlogs, submit}) => {
    const [title, setTitle] = useState([])
    const [desc, setDesc] = useState([])    

    const tambah = (e) => {
        e.preventDefault();
        
        setTitle('');
        setDesc('');        
        callback({title: title, desc: desc})            
    }

    const edit = (e) => {
      e.preventDefault();
      console.log(update())
      // update({title: title, desc: desc})
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      
       if(submit.id){
            const newBlogs = [...blogs]
            const blogsByid = newBlogs.findIndex((b => b.id == submit.id));
            newBlogs[blogsByid].title = title == "" ? submit.title : title
            newBlogs[blogsByid].body = desc == "" ? submit.body : desc
            setBlogs(newBlogs);
        }else{
            const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : desc}]
            const sortDesc = [...NewData]
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
            setBlogs(sortDesc)
        }
        setTitle('')
        setDesc('')
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black"
              value={title == "" ? submit.title : title} 
              type="text"
              placeholder="Title" 
              onChange={(e) => setTitle(e.target.value)}
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
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-black mb-3"
              id="Description"
              type="Description"
              placeholder="Description"
              value={desc == "" ? submit.body : desc} 
              onChange={(e) => setDesc(e.target.value)}
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