import styles from "./Hero.module.css"
import vektor from "../../assets/image/metaverse.png";

function Hero(){
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Technova</h2>
                    <h3 className={styles.hero__sub}>Introduction</h3>
                    <p className={styles.hero__description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quo praesentium laudantium saepe tenetur corrupti quasi deserunt suscipit. Minima asperiores aspernatur maiores exercitationem porro beatae blanditiis possimus obcaecati temporibus distinctio!</p>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src={vektor} alt=" " />
                </div>
            </section>
        </div>
    )
}

export default Hero;