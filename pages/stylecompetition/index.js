import getStyleExamples from '../../lib/getStyleExamples'

export async function getStaticProps() {
    const allStyleEntries = getStyleExamples()
    return {
        props: {
            allStyleEntries
        }
    }
}

function stylecompetition({allStyleEntries}) {
    return (
        <div>
            <h1>Style Competition</h1>
            <ul>
                {allStyleEntries.map(({myFile}) => 
                    <li>{myFile}</li>
                )}

            </ul>
        </div>
    )
}

export default stylecompetition
