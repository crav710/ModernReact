import BookShow from "./BookShow";
import { useContext } from "react";
import {BookContext} from "../context/books";

function BookList ({books,onDelete , onEdit}){
    const {count, incrementCount} = useContext(BookContext);
    const renderedBook = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
    });
    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click</button>
            {renderedBook}
        </div>
    );
}

export default BookList;