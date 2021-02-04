import styles from '../styles/James.module.css'

function jamesstyles() {
    return (
        <div>
            <h1>James Style Page</h1>
            <div class={styles.shape}>
                <p class={styles.shapetext}>
                    I'm a new shape!
                </p>
                <p>
                    <a href='https://bennettfeely.com/clippy/' class={styles.jameslinks}>
                        CSS clip-path maker
                    </a>
                </p>
            </div>
            <div class={styles.movement}>can't stop won't stop</div>
            <div class={styles.shadow}>what's in the shade there?</div>
            <div class={styles.text}>
                <p>James</p>
                <p><a href='https://fonts.google.com/' class={styles.jameslinks}>Google Fonts</a></p>
            </div>
        </div>
    )
}

export default jamesstyles
