// imports from Node.js
import fs from 'fs' //file system
import path from 'path'
// ----

const styleExampleDirectory = path.join(process.cwd(), 'pages/stylecompetition/user-entries')

export default function getStyleExamples() {
    const filenames = fs.readdirSync(styleExampleDirectory)
    const styleExampleList = filenames.map(filename => {
        const myFile = filename
        return{
            myFile
        }
    }) 
    return styleExampleList
}


// .replace(/\.js$/, '')