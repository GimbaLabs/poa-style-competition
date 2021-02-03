import Link from 'next/link'

function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/bukystyles'>Buky Styles</Link>
                </li>
                <li>
                    <Link href='/faystyles'>Fay Styles</Link>
                </li>
                <li>
                    <Link href='/joshstyles'>Josh Styles</Link>
                </li>
                <li>
                    <Link href='/jamesstyles'>James Styles</Link>
                </li>
                <li>
                    <Link href='/gwendalstyles'>Gwendal Styles</Link>
                </li>
                <li>
                    <Link href='/quasarstyles'>Quasar Styles</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
