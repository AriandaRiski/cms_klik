import { createContext, useState, useEffect } from "react";
export const BlogContext = createContext();

export const BlogProvider = (props) => {    
        const [blogs, setBlogs] = useState([])     
        const [submit, setSubmit] = useState([])
        const [blogsByid, setBlogsbyId] = useState({})        
    
        useEffect(() => {        
            (async () => {
                const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await getData.json();
                setBlogs(data);
            })()        
          }, []);

          const deletePost = (id)=>{        
            if (window.confirm("apakah anda yakin ingin menghapus data?")) {            
                const newBlogs = blogs.filter(item => item.id != id)               
                setBlogs(newBlogs)
            }    
        }

        const btnHandle = (id) => {
            const NewblogsByid = blogs.find(b=> b.id == id)
            setBlogsbyId(NewblogsByid)            
            }
        
            const blogState = {blogs, setBlogs, deletePost, submit, setSubmit, btnHandle, blogsByid, setBlogsbyId} 

    return(
        <BlogContext.Provider value={blogState}>
            {props.children}            
        </BlogContext.Provider>
    )    
}

