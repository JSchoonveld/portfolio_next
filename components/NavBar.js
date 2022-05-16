import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white navbar-dark dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Navbar</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="#about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
