import React from 'react'

function Header() {
    return (
        <>
            <header id="header">
                <a href="index.html" class="logo">My Profile</a>
            </header>
            <nav id="nav">
                <ul class="links">
                    <li class="active"><a href="index.html">Profile</a></li>
                    <li><a href="generic.html">Resume</a></li>
                    <li><a href="elements.html">Experince</a></li>
                </ul>
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header