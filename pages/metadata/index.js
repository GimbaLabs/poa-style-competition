import styles from '../../styles/Developers.module.css'

export async function getStaticProps() {
    const result = await fetch(`https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum`)
    const data = await result.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }

}

function index({data}) {

    console.log(data)

    return (
        <div>
            <h1>Metadata Playground</h1>
            <p>There are {data.length} different Metadata keys in use on the Cardano mainnet</p>
            <h2>Here is a list of all keys:</h2>
            
                {data.map(id => 
                    <div className={styles.devcard}>
                        <h1>{id.metadatum}</h1>
                    </div>
                )}
            
        </div>
    )
}

export default index
