import React from "react"
import {Link} from "react-router-dom"
import Search from "./Search"

export default function Layout({children, onSearchChange}) {
    return(
        <div>
            <header>
                <Link to="/">
                    <h1 className="header">Boksøk</h1>
                </Link>
                <Search onSearchChange={onSearchChange} />
            </header>
            <main>{children}</main>
            <footer>
                <h3>Books</h3>
            </footer>

        </div>
    )
}