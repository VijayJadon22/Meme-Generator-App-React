import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import HomePage from './pages/Home';


function App() {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
