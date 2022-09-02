import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Products = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFromDB();
    }, [])

    const getProductsFromDB = () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>all products</h1>
            {/* {JSON.stringify(products)} */}
            {
                products.map((product, i) => {
                    return (
                        <div key={product._id}>
                            <h5><Link to={`/${product._id}`}>{product.title}</Link></h5>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <link to={`/update/${product._id}`}></link>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Products