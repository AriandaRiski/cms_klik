import { useRouter } from 'next/router'
import Link from 'next/link'

const BlogDetail = ({data}) => {
    const { id } = useRouter().query;
    return (
        <>
            <h2>Halaman Blog Detail {id}</h2>
            <Link href={`/blogs`}>
                <button>Back</button>
            </Link>

            <h2>Server Side Rendering</h2>
            <h2>{data && data.title}</h2>
            <hr></hr>
            <div>
                {data && data.body}
            </div>

        </>
    )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    const data = await res.json()    
    // Pass data to the page via props
    return { props: { data } }
  }
export default BlogDetail;