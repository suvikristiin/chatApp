import './styles/App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path='/signup' element={<Header/>} />
        <Route path='/login' element={<Header/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
