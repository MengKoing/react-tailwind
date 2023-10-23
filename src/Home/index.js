import MyNav from "../Components/MyNav"
import Article from "../Components/Article"
import MyFooter from "../Components/MyFooter"
import Cards, { Avatar } from "../Components/Cards"
import { useEffect, useState } from "react"
import Loading from "../Components/Loading"


function Home() {
    // state -> special variable
    // state hook 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const fectProducts = (limit, offset) => {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(res => {
            setProducts(res)
            setLoading(false)
        })
    }
    // execute
    useEffect(() => {
        // Call to api products
        fectProducts(16, 0)
        console.log("in use effect")
    }, [])

    useEffect(()=>{
        console.log("another use Effect")
    },[count])

    return (
        <>
            
            {/* <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setCount(count + 1)}>
                click me {count} times </button> */}
            <main>
                <Article />
                <section className="container mx-auto ">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center
                    ">We invest in popular Products</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    {/* loop data from products to cards */}
                    <section className="grid grid-cols-6 md:grid-cols-5 lg:grid-cols-3 gap-4 ">
                    {
                        loading ? <Loading/> :
                        products.length > 0 && products.map(product => <Cards 
                            key={product.id}
                            url={product.images[0]} 
                            desc={product.description} 
                            price={product.price}/>)

                    }
                    </section>
                </section>
            </main>
            <MyFooter />
        </>
    )
}

export default Home

