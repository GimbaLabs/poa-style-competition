import styles from '../styles/James.module.css'

function jamesstyles() {
    return (
        <div>
            <h1>James Style Page</h1>
            <div class={styles.shape}>make me a different shape</div>
            <div class={styles.movement}>animate me</div>
            <div class={styles.shadow}>add shadows to me</div>
            <div class={styles.text}>change this text to your name, then decorate it</div>
        </div>
    )
}

export default jamesstyles
