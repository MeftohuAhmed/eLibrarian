import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const App = () => {
  return (
    <div>
      <Navbar />
      {/*<HomePage />*/}
      <SearchBooksPage />
      <Footer/>
    </div>
  );
}

export default App;