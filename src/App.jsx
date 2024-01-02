
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header2 from './components/Header2/Header2';
import TemplatePage from './pages/Template/TemplatePage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import NewsPage from './pages/NewsPage/NewsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import SeasonPage from './pages/SeasonPage/SeasonPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/gallery" element={<TemplatePage name={`Galería`}/>} />
      <Route path="/team" element={<PlayersPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/news" element={<NewsPage/>} />
      <Route path="/season" element={<SeasonPage/>} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
       <div className="App">
        <Header2/>
       <Layout />
    </div>
    </Router>
   
  );
}

export default App;
