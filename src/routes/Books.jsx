
import  bookFacade from "../bookFacade";
import {NavLink, Outlet} from "react-router-dom";

export default function Books() {
    let books = bookFacade.getBooks();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {books.map((book) => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                        to={`/books/${book.id}`}
                        key={book.id}
                    >
                        {book.title}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}