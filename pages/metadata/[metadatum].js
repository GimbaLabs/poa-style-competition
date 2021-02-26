export const getServerSideProps = async pageContext => {
    const metadatakey = pageContext.query.metadatum
    const res = await fetch(`https://postgrest-api.testnet.dandelion.link/rpc/get_metadata?metadatum=${metadatakey}`)
    const localdata = await res.json()

    return {
        props : {
            metadatakey, localdata
        }
    }
}

export default function metadatum({metadatakey, localdata}) {

    return (
        <div>
            <h1>This page has Cardano transaction metadata on it!</h1>
            <h2>This page is about Metadata Key: {metadatakey}</h2>
            <p>{JSON.stringify(localdata)}</p>
        </div>
    )
}

// What if I want to make this metadata look better?
// What if I don't want every transaction?

// 