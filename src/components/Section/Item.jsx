
import Link from 'next/link'
import { useContext, useEffect } from 'react';
import { BlogContext } from '@/components/Context/BlogContext'
import { useDispatch, useSelector} from 'react-redux'
import { getCategory } from '@/redux/reducers/category' ;

const Item = () => {

  const blogsData = useContext(BlogContext)
  const dispatch = useDispatch();
    const {category} = useSelector((state) => state.category);
    useEffect(() =>{
        dispatch(getCategory())
    },[]);


    return (
        <>                        
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 pt-12">
                            Jumlah Article {category.length}
                        </h2>                        

                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        {category.map((data, index) => (
                            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" key={index}>
                              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                        Artikel {data.id}
                                      </p>
                                      <div className="w-full font-bold text-xl text-gray-800 px-6">
                                        {data.title}
                                      </div>
                                      <p className="text-gray-800 text-base px-6 mb-5">
                                        {data.slug}
                                      </p>
                                    </a>
                                  </div>
                                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div className="flex items-center justify-start">
                                      <Link href={`/blogs/${data.id}`}>
                                          <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                                              Read More
                                          </button>
                                      </Link>                        

                                      <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e)=>blogsData.btnHandle(data.id)}>
                                              Edit
                                      </button>
                                      <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-1 py-1 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e) => blogsData.deletePost(data.id)}>
                                              Delete
                                      </button>
                                    </div>
                                  </div>
                            </div>
                            
                        ))}
                    </div>
                </section>                                  
        </>
    )

}

export default Item;



    