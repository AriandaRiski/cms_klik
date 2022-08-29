import Layout from '@/layouts/Layout'
import Item from '@/components/Section/Item'
import Form from '@/components/Form'


import { useState, useEffect } from 'react'
import Link from 'next/link'

const Blog = ({getData_SSR}) => {
    const [blogs, setBlogs] = useState([])    
    const [submit, setSubmit] = useState([])

    useEffect(() => {        
        (async () => {
            // const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            // const data = await getData.json();
            setBlogs(getData_SSR);
        })()        
      }, []);

    const deletePost = (getData_SSR)=>{        
        if (window.confirm("apakah anda yakin ingin menghapus data?")) {            
            const newBlogs = blogs.filter(item => item.id != getData_SSR)               
            setBlogs(newBlogs)
        }    
    }

    const callback = (data) => {
        let newId = blogs.length+1;
        const newData = [...blogs,{id: newId, title: data.title, body: data.Desc}]
        const sorting = [...newData];
        sorting.sort((a,b) => (a.id > b.id ? -1 : 1));
        setBlogs(sorting)
    }

    const update = (dtEdit) =>{
        const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : desc}]
        const sortDesc = [...NewData]
        sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
        setBlogs(sortDesc)
    }

    const tampungData = (e) => {
        setSubmit(e);
    }
            
    const jumlahPost = blogs.length
    return (
        <>
            <Layout>                                                    
                {/* <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                            Jumlah Article {jumlahPost}
                        </h2>
                        <Form callback={callback} update={update}/>

                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        {blogs.map((getData_SSR, index) => (

                            <Item post={getData_SSR} key={getData_SSR.id} deletePost={deletePost} />

                        ))}
                    </div>
                </section> */}

                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                            Jumlah Article {jumlahPost}
                        </h2>
                        <Form callback={callback} blogs={blogs} setBlogs={setBlogs} submit={submit} update={update}/>

                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        {blogs.map((getData_SSR, index) => (

                            <Item post={getData_SSR} key={getData_SSR.id} btnSubmit={tampungData} delete={deletePost}  />

                        ))}
                    </div>
                </section>
            </Layout>
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