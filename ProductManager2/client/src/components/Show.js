import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';

const Show = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { removeFromDom } = props;
    const history = useHistory();
    const Delete = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                history.pushState('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id]);
    return (
        <div>
            <h1>{product.title}</h1>
            <button><Link to='/' onClick={(e) => { Delete(product._id) }}>Delete </Link></button>
        </div>
    )
}
export default Show