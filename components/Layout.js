import Nav from './Nav'
import styles from '../styles/Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Welcome to POA Dev Course 1</h1>
                    {children}
                </main>
            </div>  
        </>
    )
}

export default Layout
