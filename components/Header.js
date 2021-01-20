import Link from 'next/link'

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                        <Link href='/about'><a>About</a></Link>

                        <Link href='/'><a>Home</a></Link>

                </ul>
            </nav>
            <h1>XKCD</h1>
        </header>
    )
}