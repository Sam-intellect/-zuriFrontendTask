import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
