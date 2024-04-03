import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './styles/main.scss'

import Layout from './components/Layout';
import BookList from './components/BookList';
import Search from './components/Search';


function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = () => {
    fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&page=${page}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        setBooks(data.works.map(work => work.title));
      })
      .catch(error => console.error("Error books:", error));
  };

  useEffect(()=> {
    fetchBooks("James Bond")
  })

  const handleSearchSubmit = (query) => {
    fetchBooks(query);
  }

  return (
    <Router>
      <Layout onSearchChange={handleSearchSubmit}>
        <Routes>
          <Route path="/" element={
            <>
            
            <BookList books={books} />
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
