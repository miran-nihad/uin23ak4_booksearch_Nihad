import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.scss';
import BookDetail from './components/BookDetail';
import Layout from './components/Layout';
import SearchResults from './components/SearchResults';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response is not good');
      }
      const data = await response.json();
      setBooks(data.docs || []); // Sjekk om data.docs er definert før du setter tilstand
    } catch (error) {
      console.error('Error fetch operation:', error);
    }
  };
  
  useEffect(() => {
    fetchBooks("James Bond");
  }, []);

  const handleSearchSubmit = (query) => {
    fetchBooks(query);
  };

  return (
    <Router>
      <Layout onSearchChange={handleSearchSubmit}>
        <Routes>
          <Route path="/" element={<SearchResults books={books} />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
