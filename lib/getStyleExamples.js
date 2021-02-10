// imports from Node.js
import fs from 'fs' //file system
import path from 'path'
// ----

const styleExampleDirectory = path.join(process.cwd(), 'pages/stylecompetition/user-entries')

export default function getStyleExamples() {
    const filenames = fs.readdirSync(styleExampleDirectory)
    const styleExampleList = filenames.map(filename => {
        const myFile = filename.replace(/\.js$/, '')
        return{
            myFile
        }
    }) 
    return styleExampleList
}


// Next is built on top of React
// React is built on top of Node.js
// Bottom layer: Node.js running




// .replace