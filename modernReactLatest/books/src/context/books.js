import { createContext, useState} from "react";
import axios from 'axios';

const BookContext = createContext();


function Provider({children}){

    const [books,setBooks] = useState([]);

    const fetchBooks = async () =>{
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    }

    const editBookbyId = async (id, newTitle) =>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title : newTitle
        })
        const updateBooks = books.map((book) => {
            if(book.id === id) {
                return {...book, ...response.data};
            }
          return book;   
        });        
        setBooks(updateBooks);
    };
    const deleteBookById = async (id) =>  {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books/',{
            title
        })
        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
    }

    const valueToShare={
        books,
        deleteBookById,
        editBookbyId,
        createBook,
        fetchBooks
    }

    return(
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    );
}
export {Provider};
export default BookContext;