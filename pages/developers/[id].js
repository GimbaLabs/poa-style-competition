import devs from '../../devs.json'

export const getServerSideProps = async pageContext => {
    const devID = pageContext.query.id
    const poadev = devs.team[devID-1]

    return {
        props: {
            poadev
        }
    }
}


function profile({ poadev }) {

    return (
        <div>
            <h1>{poadev.username}</h1>
        </div>
    )
}

export default profile
