
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Header2 from './components/Header2/Header2';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
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
