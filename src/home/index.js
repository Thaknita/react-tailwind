import { Avatar } from "flowbite-react";
import Artical from "../Component/Artical";
import { Cards } from "../Component/Cards";
import Myfooter from "../Component/Myfooter";
import Mynav from "../Component/Mynav";
import { useEffect, useState } from "react";
import Loading from "../Component/Loading";



function Home(){
        const [products, setProduct] = useState([])
        const [loading, setLoading] = useState(true)
        const  fetchProduct = (limit, offset) =>{ 
                    fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
                    .then(res => res.json())
                    .then(res => {
                        setProduct(res)
                        setLoading(false) }
                        
                        )
                    }
        useEffect (() => {
            fetchProduct(300,0)
            console.log("in useEffect")
        }, []
        )
    return(
        <>
        <Artical/>
        <main>
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {   
            loading ? <Loading /> :
            products.length > 0 &&    
            products.map(product => <Cards 
                    url={product.images[0]}
                    desc={product.description}
                    price={product.price}
            />)
        }
        </section>
        </main>
        </>
    );
}

export default Home;
