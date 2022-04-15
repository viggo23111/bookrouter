import React, {useState} from 'react';
import BookFacade from "../bookFacade";

const FindBook = props => {
    const[book, setBook] = useState()
    const[bookId,setBookid] = useState()

    const updateSearchID = (e) => {
      setBookid(e.target.value)
        console.log(bookId)
    }

    const getBook = () => {
        const book = BookFacade.findBook(bookId)
        setBook(book)

    }


    return (
        <div>
            <input type={"text"} placeholder={"Book id"} onChange={updateSearchID}/>
            <button onClick={getBook}>Find book</button>
            {
                book &&
                <div className={"bookInfo"}>
                    <h2>{book.title}</h2>
                    <p>{book.info}</p>
                </div>
            }
        </div>


    );
};


export default FindBook;