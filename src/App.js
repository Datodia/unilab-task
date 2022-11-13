import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home/Home';
import { Sign } from './pages/Sign/Sign';
import { Todo } from './pages/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
