import styles from '../styles/Buky.module.css'

function bukystyles() {
    return (
        <div>
            <h1>Buky Style Page</h1>
            <div class="structure">
            <div class={styles.shape4}></div>
                <div class={styles.shape3}></div>
                <div class={styles.shape2}></div>
                <div class={styles.shape}></div> 
            </div>
            
            <div class={styles.movement}><h3>Animate me</h3></div>
            <div class={styles.shadow}><h1> What a shadowy effect</h1></div>
            <div class={styles.text}>
                <h5>I was decorated quite nicely</h5>
                <h4>I was decorated quite nicely</h4>
                <h3>I was decorated quite nicely</h3>
            </div>
        </div>
    )
}

export default bukystyles