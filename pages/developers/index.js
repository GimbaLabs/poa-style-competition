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
            <h2>{poadevs.coursename} | {poadevs.date}</h2>

                {poadevs.team.map(({id, username, location, goals}) => 
                    <div className={styles.devcard}>
                        <h1>{username}</h1> 
                        <h2>{location} from {id}</h2>
                        <ol>
                            {goals.map((x) => <li>{x}</li> )}
                        </ol>
                        <br />
                        <Link href={`/developers/${id}`}>
                            profile
                        </Link>
                    </div>
                )}


        </div>
    )
}

export default developers