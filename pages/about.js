import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum iure libero ex facilis, sed, animi magni dolor aspernatur odit adipisci asperiores hic veritatis rerum vitae, placeat eos quae incidunt!</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    )
}