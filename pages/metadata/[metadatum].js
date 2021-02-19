export const getServerSideProps = async pageContext => {
    const metadatakey = pageContext.query.metadatum
    const res = await fetch(`https://postgrest-api.mainnet.dandelion.link/rpc/get_metadata?metadatum=${metadatakey}`)
    const data = await res.json()

    return {
        props : {
            metadatakey, data
        }
    }
}

export default function metadatum({metadatakey, data}) {
    return (
        <div>
            <h1>This page has Cardano transaction metadata on it!</h1>
            <h2>This page is about Metadata Key: {metadatakey}</h2>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
