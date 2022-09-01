
import Link from 'next/link'

const Item = (props) => {
  
  const post = props.post;
  const hps = props.delete;

  const hapus = (e) =>{
    hps(post.id); 
  }


const btnHandle = (e) => {
props.btnSubmit(e);

}

    return (
        <>            
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" key={post.id}>
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      Artikel {post.id}
                    </p>
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                      {post.title}
                    </div>
                    <p className="text-gray-800 text-base px-6 mb-5">
                      {post.body}
                    </p>
                  </a>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div className="flex items-center justify-start">
                    <Link href={`/blogs/${post.id}`}>
                        <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                            Read More
                        </button>
                    </Link>                        

                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={()=>btnHandle({action :'edit', id:post.id, title:post.title, body:post.body, formTitle: 'Form Edit Blog'})}>
                            Edit
                    </button>
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e) => hapus(e)}>
                            Delete
                    </button>
                  </div>
                </div>
            </div>      
        </>
    )

}

export default Item;



    