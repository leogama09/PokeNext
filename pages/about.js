import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>About the project</h1>
            <p>PokeNext is an App built on Next.js to query Pokémons.</p>
            <Image 
                src="/images/charizard.png" 
                width="300" 
                height="300" 
                alt="Charizard" />
        </div>
    )
}