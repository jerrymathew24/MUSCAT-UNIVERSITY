import React from 'react';
import { Navbar, Home, Welcome, Admission, Requirements, Transfer, ViewContact, Scholarships, Types, Footer } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Welcome />
      <Admission />
      <Requirements />
      <Transfer />
      <ViewContact />
      <Scholarships />
      <Types />
      <Footer />
    </div>
  )
}

export default App