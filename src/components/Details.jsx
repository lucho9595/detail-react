import React, { useEffect, useState } from 'react';
import { getProduct } from '../data/api';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from '../style/Details.module.css'

export const Details = () => {
    const [product, setProduct] = useState(null);
    const [click, setClick] = useState(false)
    const { id } = useParams()

    const fetchProduct = async () => {
        try {
            if (id) {
                const result = await getProduct(id);
                setProduct(result);
            } else {
                console.error('ID is not defined');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(product)

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <div className={styles.container}>
            {product &&
                <div className={styles.containerInfo}>
                    <Link to='/'>
                        <button className={styles.btn}>Go Back</button>
                    </Link>
                    <p>Title: {product.title}</p>
                    <img src={product.thumbnail} className={styles.images} />
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Sku: 5512234005454</p>
                    <button onClick={handleClick} className={styles.btn}>Add Cart</button>
                    <p className={styles.thanks}>{click === true ? "Gracias por su compra" : null}</p>
                </div>
            }
        </div>
    );
}
