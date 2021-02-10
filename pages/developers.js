import devs from '../devs.json'

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

                {poadevs.map(({username, location, goals}) => 
                    <div>
                        <h1>{username}</h1> 
                        <h2>{location}</h2>
                        <ol>
                            {goals.map((x) => <li>{x}</li> )}
                        </ol>
                    </div>
                )}


        </div>
    )
}

export default developers