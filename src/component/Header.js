import Nav from './Nav';

function Header() {
    return <header>
        <a href="/">
        <img src="Logo.svg" alt="Little Lemon Logo" className="logo" />
        </a>
        <Nav/>
    </header>
}

export default Header;