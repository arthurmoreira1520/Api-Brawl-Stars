import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import styles from './Home.module.css';
import React, { useEffect, useState } from 'react';

function Home() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        const buscarGrupos = async () => {
            try {
                const response = await fetch('./brawl.json');
                const data = await response.json();
                // Filtra os itens que possuem a propriedade "id"
                const personagens = data.filter(item => item.id);
                setPersonagens(personagens);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        buscarGrupos();
    }, []);

    return (
        <Container>
            <section className={styles.home}>
                {personagens.map((personagem, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.p1}>
                            <p>{personagem.nome}</p>
                        </div>
                        <div className={styles.p2}>
                            <img src={personagem.imagem} alt={personagem.nome} />
                        </div>
                        <div className={styles.p3}>
                            <p>ID: {personagem.id}</p>
                        </div>
                        <div className={styles.p4}>
                            <p>Poder: {personagem.poder}</p>
                        </div>
                    </div>
                ))}
            </section>
        </Container>
    );
}

export default Home;