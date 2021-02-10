import Link from 'next/link'
import styles from '../styles/Nav.module.css'

function Nav() {
    return (
        <div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/stylecompetition'>Style Competition</Link>
                    </li>
                    <li>
                        <Link href='/developers'>Developers</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
