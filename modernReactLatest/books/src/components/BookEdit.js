import { useState } from "react";
import useBooksContext from "../hooks/use-hooks-context";


function BookEdit ({book ,onSubmit}){
    const [title, setTitle] = useState(book.title);
    const {editBookbyId} = useBooksContext();
    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit =  (event) =>{
        event.preventDefault(); 
        onSubmit();
        editBookbyId(book.id, title);
    }
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input value ={title} onChange={handleChange} className="input"/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;