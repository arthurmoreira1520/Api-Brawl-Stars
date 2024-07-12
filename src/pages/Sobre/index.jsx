import styles from './Sobre.module.css'
import React, { useEffect, useState } from 'react';


function Sobre() {
    const [mapas, setMapas] = useState([]);
    useEffect(() => {
        const buscarGrupos = async () => {
            try {
                const response = await fetch('./brawl.json');
                const data = await response.json();
                const mapas = data.filter(item => item.dificuldade);
                setMapas(mapas);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        buscarGrupos();
    }, []);
    return (
        <section className={styles.home}>
        {mapas.map((mapa, index) => (
            <div key={index} className={styles.card}>
                <div className={styles.p1}>
                    <p>{mapa.nome}</p>
                </div>
                <div className={styles.p2}>
                    <img src={mapa.imagem} alt={mapa.nome} />
                </div>
                <div className={styles.p5}>
                    <p>Dificuldade: {mapa.dificuldade}</p>
                </div>
            </div>
        ))}
    </section>
    )
}

export default Sobre