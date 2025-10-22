import { Link } from "gatsby";
import * as React from "react"

const Menu = () => (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto text-center text-sm">
            <div className="pt-2 pb-2 text-gray-600">
                <Link to="/#hero" className="hover:text-gray-400 mx-2">Home</Link>
                <Link to="/#resources" className="hover:text-gray-400 mx-2">Resources</Link>
                <Link to="/#contact" className="hover:text-gray-400 mx-2">Contact</Link>
            </div>
        </div>
    </nav>
);

export default Menu;