import CartWidget from "./CartWidget"

export default function Header(){
    return(
        <header className="header">

            <h3 className="header--title">CFM Store</h3>

            <nav className="header--navbar">
                <ul className="header--navbar_items">
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Contact</li>
                    <li>
                    <CartWidget />
                    </li>
                </ul>
                
            </nav>

        </header>
    )
}