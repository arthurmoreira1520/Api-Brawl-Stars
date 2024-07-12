import { useEffect, useState } from 'react'

import styles from './Projeto.module.css'

function Projetos() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./brawl.json'); // Substitua pela URL da sua API
                const data = await response.json();
                setDados(data.slice(-4)); // Pega apenas os 4 últimos itens da array
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);
   
    return (
        <section className={styles.home}>
        {dados.map((item, index) => (
            <div key={index} className={styles.card}>
                <div className={styles.p1}>
                    <p>{item.nome}</p>
                </div>
                {item.imagem && (
                    <div className={styles.p2}>
                        <img src={item.imagem} alt={item.nome} />
                    </div>
                )}
                {item.area_atuacao && (
                    <div className={styles.p5}>
                        <p>Área de Atuação: {item.area_atuacao}</p>
                    </div>
                )}
            </div>
        ))}
    </section>
    )
}

export default Projetos
