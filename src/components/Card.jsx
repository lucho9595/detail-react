import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Card.module.css'

export const Card = ({ id, title, thumbnail, rating, price }) => {

    return (
        <div className={styles.container}>
            <img src={thumbnail} alt="product" className={styles.images} />
            <h3 >Name: {title}</h3>
            <h3 >Rating: {rating}</h3>
            <h3>Price: {price}</h3>
            <Link to={`details/${id}`}>
                <button className={styles.btn}>Description</button>
            </Link>
        </div>
    )
}
