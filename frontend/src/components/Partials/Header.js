import React from "react";

function Header() {
    return (
        <header className={"bg-light"}>
            <nav className="navbar navbar-light d-flex ">
                <div className="container-fluid">
                    <a href="/">
                        <img src="/logo-dyflexis-2.svg" alt=""/>
                    </a>
                    <ul>
                        <li><a href="/vragenlijst">Vragenlijst</a></li>
                        <li>TEST</li>
                        <li>TEST</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;