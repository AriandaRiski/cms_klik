import Layout from '@/layouts/Layout'
import Item from '@/components/Section/Item'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Blog = ({getData_SSR}) => {
    const [blogs, setBlogs] = useState([])    

    useEffect(() => {        
        (async () => {
            // const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            // const data = await getData.json();
            setBlogs(getData_SSR);
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
            <Layout>                
                
                 {/*<h2 className="text-3xl font-bold underline">
                    Data 1
                </h2>
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
            </ul> */}
            
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                            Jumlah Article {jumlahPost}
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        {blogs.map((getData_SSR, index) => (

                            <Item post={getData_SSR} key={index}/>

                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const getData_SSR = await res.json()
    console.log(context);
    // Pass data to the page via props
    return { props: { getData_SSR } }
  }
export default Blog;