import React, {useState} from 'react';
import BookFacade from "../bookFacade";

const AddBook = props => {

    const initialState = {
        id:null,
        title: "",
        info: "",
    }
    const [book,setBook] = useState(initialState)

    const handleInput = (e) => {
        const target = e.target
        const value = target.value
        const id = target.id
        setBook({...book, [id]:value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(book)
        BookFacade.addBook(book)
    }

    return (
        <div>
            <h3> Add book</h3>
            <form onChange={handleInput} onSubmit={handleSubmit}>
                <input type={"text"} placeholder={"title"} id="title"/>
                <input type={"text"} placeholder={"info"} id="info"/>
                <input type={"submit"}/>
            </form>

        </div>
    );
};

AddBook.propTypes = {

};

export default AddBook;