import React, { useEffect, useState } from 'react'
import { getAll } from '../data/api';
import { Card } from './Card';
import styles from "../style/Home.module.css"

export const Home = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const result = await getAll();
            console.log(result)
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Puedes manejar el error de manera adecuada, como mostrar un mensaje de error al usuario.
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Lista de Productos:</h1>
            <div className={styles.containerInfo}>
                {data ? (
                    data.map((product) => (
                        <div key={product.id} className={styles.dataInfo}>
                            <Card {...product} />
                        </div>
                    ))
                ) : (
                    <div>
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

