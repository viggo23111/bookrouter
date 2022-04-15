import React from 'react';
import BookFacade from "../bookFacade";

const Details = () => {
    console.log(params.bookID)
    let book = BookFacade.findBook(parseInt(params.bookID, 10));
    return (
        <main style={{ padding: "1rem" }}>
            <h2>Title: {book.title}</h2>
            <p>info: {book.info}</p>
            <p>ID: {book.id}</p>
        </main>
    );
};

export default Details;