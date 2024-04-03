import {Link} from "react-router-dom"

export default function Layout() {
    return(
        <div id="container">
            <header>
                <Link to="/">
                    <h1 className="header">Boksøk</h1>
                </Link>
                <Search onSearchChange={onSearchChange} />
            </header>
            <main>{children}</main>
            <footer>

            </footer>

        </div>
    )
}