import { useState , useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App(){
    const [books,setBooks] = useState([]);

    const fetchBooks = async () =>{
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    }

    // Dont do this 
    // fetchBooks(); // infinite loop of network request  because of re-render

    useEffect(() => {
        fetchBooks()
    },[]);

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
    return (
    <div className="app">
        <h1> Reading List</h1>
        <BookList onEdit={editBookbyId} onDelete={deleteBookById} books={books}/>
        <BookCreate onCreate={createBook}/>
    </div>
    );
}
export default App;