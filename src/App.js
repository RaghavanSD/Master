import React from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
