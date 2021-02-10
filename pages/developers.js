import devs from '../devs.json'

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
            <ul>
                {poadevs.map(({username, location}) => 
                    <li>{username} in {location}</li>
                )}

            </ul>
        </div>
    )
}

export default developers