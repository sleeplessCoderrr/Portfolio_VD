import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/home.tsx';

function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
          </Routes>
      </Router>
  )
}

export default App
