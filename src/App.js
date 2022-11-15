import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home/Home';
import { Sign } from './pages/Sign/Sign';
import { Todo } from './pages/Todo/Todo';
import useLocalStorage from './hooks/UseLocalStorage/useLocalStorage';

function App() {

  const [img, setImg] = useLocalStorage("img", "");

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setImg(event.target.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign img={img} onChange={handleChange} />} />
          <Route path="/todo" element={<Todo img={img} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
