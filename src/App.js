import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route element={<Home />} exact path='/' />
          <Route element={<Blog />} path='/blog/:slug' />
        </Routes>
      <Footer />
      </Router>
  );
}

export default App;
