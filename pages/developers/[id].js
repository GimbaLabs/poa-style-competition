export const getServerSideProps = async pageContext => {
    const devID = pageContext.query.id // I used ".id" because the name of my file is [id].js

    return {
        props : {
            devID
        }
    }
}

function eachDev({devID}) {
    return (
        <div>
            <h1>HELLO I AM A DEV</h1>
            <h3>Slug: {devID}</h3>
        </div>
    )
}

export default eachDev
