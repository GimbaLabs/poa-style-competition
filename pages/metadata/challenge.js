export const getServerSideProps = async pageContext => {
    const res = await fetch(`https://postgrest-api.testnet.dandelion.link/rpc/get_metadata?metadatum=20210226`)
    const localdata = await res.json()

    return {
        props : {
            localdata
        }
    }
}

export default function metadatum({localdata}) {

    console.log(localdata)

    return (
        <div>
            <h1>This page has Cardano transaction metadata on it!</h1>
            <h2>This page is about Metadata Key: 20210226</h2>
            
            <h3>Message</h3>
            <p>To: {localdata[0].data.to}</p>
            <p>From: {localdata[0].data.from}</p>
            <p>Message: {localdata[0].data.message}</p>


            <h3>Here is a quote for you!</h3> 
            <p>{localdata[0].data.quote}</p>
            <p>{localdata[0].data.author}</p>
        </div>
    )
}

// What if I want to make this metadata look better?
// What if I don't want every transaction?


