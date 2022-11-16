import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Home } from './pages/Home/Home';
import { Sign } from './pages/Sign/Sign';
import { Todo } from './pages/Todo/Todo';
import useLocalStorage from './hooks/UseLocalStorage/useLocalStorage';


function App() {

  const [img, setImg] = useLocalStorage("img", null);
  const [name, setName] = useLocalStorage("name", "")
  const [logedIn, setLogedIn] = useLocalStorage("isLoggedin", false)



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
      <Router basename='/unilab-task'>
        <Routes>
          <Route path="/" element={logedIn ? <Navigate to={'/todo'} /> : <Home />} />
          <Route path="/sign" element={logedIn ? <Navigate to={'/todo'} /> : <Sign img={img} onChange={handleChange} name={name} setName={setName} setLogedIn={setLogedIn} />} />
          <Route path="/todo" element={logedIn ? <Todo img={img} name={name} setName={setName} setImg={setImg} setLogedIn={setLogedIn} /> : <Navigate to={'/'} />} />
          <Route path="/*" element={logedIn ? <Navigate to={'/todo'} /> : <h1 className='eror'>404 Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
