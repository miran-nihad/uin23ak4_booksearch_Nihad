import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.scss'

import Layout from './components/Layout';
import BookList from './components/BookList';
import SearchResults from './components/SearchResults'


function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = async (query) => {
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        setBooks(data.docs.map(doc => doc.title));
      })
      .catch(error => console.error("Error fetching books:", error));
  };
  
  

  useEffect(()=> {
    fetchBooks("James Bond")
  }, [])

  const handleSearchSubmit = (query) => {
    fetchBooks(query);
  }

  return (
    <Router>
      <Layout onSearchChange={handleSearchSubmit}>
        <Routes>
          <Route path="/" element={
            <>
            
            <SearchResults books={books} />
            </>
          } />
          <Route path="/book/:bookId" element={<BookList />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
