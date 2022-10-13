import Layout from '@/layouts/Layout'
import Item from '@/components/Section/Item'
import Form from '@/components/Form'

import { BlogProvider } from '@/components/Context/BlogContext'

const Blog = () => {  
            
    
    return (
        <>
            <Layout>                                                                    
                <BlogProvider>
                    <Form/>                    
                    <Item/>
                </BlogProvider>                
            </Layout>
        </>
    )
}


// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//     const getData_SSR = await res.json()    
//     // Pass data to the page via props
//     return { props: { getData_SSR } }
//   }
export default Blog;