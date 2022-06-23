import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header className="header">

            <h3 className="header--title">
                <Link to="/">
                    CFM Store
                </Link>
            </h3>

            <nav className="header--navbar">
                <ul className="header--navbar_items">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Contact
                        </Link>
                    </li>
                    <li>
                    <CartWidget />
                    </li>
                </ul>
                
            </nav>

        </header>
    )
}