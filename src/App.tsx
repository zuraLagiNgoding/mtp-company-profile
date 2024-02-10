import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import DetailCategory from './pages/DetailCategory';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:id' element={<DetailCategory/>}/>
        <Route path='/notfound' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
