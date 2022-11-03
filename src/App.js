import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" />
        <Home />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
