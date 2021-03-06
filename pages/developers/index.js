import Link from 'next/link'
import devs from '../../devs.json'
import styles from '../../styles/Developers.module.css'

// getStaticProps() is the MOST IMPORTANT THING I'm showing you today!

// getStaticProps() is built in to Next.js

export async function getStaticProps() {
    const poadevs = devs

    return {
        props: {
            poadevs
        }
    }
}

function developers({poadevs}) {
    return (
        <div>
            <h1>Developer List</h1>
            <h3>{poadevs.coursename} | {poadevs.date}</h3>

                {poadevs.team.map(({username}) => 
                    <Link href={`/developers/${username}`}>
                        <a>
                            <div className={styles.devcard}>
                                <h1>{username}</h1> 
                            </div>
                        </a>
                    </Link>

                )}


        </div>
    )
}

export default developers