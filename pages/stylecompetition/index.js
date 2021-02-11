import getStyleExamples from '../../lib/getStyleExamples'
import Link from 'next/link'

// getStaticProps() is the MOST IMPORTANT THING I'm showing you today!

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
                    <li>
                        <Link href={`/stylecompetition/user-entries/${myFile}`}>
                            {myFile}
                        </Link>
                    </li>
                )}

            </ul>
        </div>
    )
}

export default stylecompetition
