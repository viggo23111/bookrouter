import {Outlet, Link, NavLink} from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Book manager</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <NavLink to="/books">Books </NavLink> |{" "}
                <NavLink to="/add_book">Add a book</NavLink> |{" "}
                <NavLink to="/find_book">Find a book</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}