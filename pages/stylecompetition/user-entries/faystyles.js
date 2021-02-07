import styles from '../../../styles/Fay.module.css'

function faystyles() {
    return (
        <div>
            <h1>Fay Style Page</h1>
            <div>
                <div style={{marginBottom: "6px"}}>make me a different shape</div>
                <div className={styles.shape}>
                </div>
            </div>
            <div>
                <p>animate me</p>
                <div className={styles.movement}>
                    
                    </div>
                
            </div>
            <div className={styles.shadow}>add shadows to me</div>
            <div className={styles.text}> <span className={styles.blue}> Favour </span> 
                <span className={styles.purple}> Vivian </span> 
                <span className={styles.orange}>Woka</span></div>
        </div>
    )
}

export default faystyles