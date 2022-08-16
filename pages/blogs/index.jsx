import { useState, useEffect } from 'react'
import Link from 'next/link'


const Blog = ({getData_SSR}) => {
    const [blogs, setBlogs] = useState([])
    const [oke, setOke] = useState("oke")

    useEffect(() => {        
        (async () => {
            const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await getData.json();
            setBlogs(data);
        })()        
      }, []);

    const deletePost = (getData_SSR)=>{        
        if (window.confirm("apakah anda yakin ingin menghapus data?")) {
            const newBlogs = blogs.filter(item => item.id != getData_SSR.id)               
            setBlogs(newBlogs)
        }    
    }
            
    const jumlahPost = blogs.length
    return (
        <>
            <h2>Data 1</h2>
            <h3>Jumlah Data= {jumlahPost}</h3>
            <ul>
                {blogs && blogs.map((data, index) => {
                    return (
                        <div key={data.id}>   
                            <li>{data.title}</li>
                            <Link href={`blogs/${data.id}`} >
                                <button>Detail</button>                                                                
                            </Link>
                            <button onClick={() => deletePost(data)} id={data.id}>DELETE</button>
                        </div>                                              
                        )    
                    }                    
                )}
            </ul>

            <h2>Data 2</h2>
            <h4>Jumlah Data= {jumlahPost}</h4>
            <ul>
                {blogs && blogs.map((getData_SSR, index) => {
                    return (                                            
                        <div key={getData_SSR.id}>   
                            <li>{getData_SSR.title}</li>
                            <Link href={`blogs/${getData_SSR.id}`} >
                                <button>Detail</button>                                                                
                            </Link>
                            <button onClick={() => deletePost(getData_SSR)} id={getData_SSR.id}>DELETE</button>
                        </div>                                              
                        )    
                    }                    
                )}
            </ul>
        </>
    )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const getData_SSR = await res.json()
    console.log(context);
    // Pass data to the page via props
    return { props: { getData_SSR } }
  }
export default Blog;