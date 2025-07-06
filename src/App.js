import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Alertbox from './Componets/Alertbox';
import About from './Componets/About';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState();

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 5000);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212521";
      showalert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title='TEXTutilis' mode={mode} toggleMode={toggleMode} />
        <Alertbox alert={alert} />
        <div className='container my-3'>
        <Routes>
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
            <Route exact path="/" element={<TextForm showalert={showalert} mode={mode} heading="Enter Text to Analyse" />} />
          </Routes>
          </div>
        </Router>
      
      </>
      );
}

      export default App;
