// import './index.css';
// import './App.css';
import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')//whether dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      //we can use same naming at both sides
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
 
   const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-sucess')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","sucess")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","sucess")
    }
  }
  return (
    <>
      <Router>
      <Navbar title = "TextUtils" about = "About_TextUtils" mode ={mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
      <Alert alert = {alert}/>

      <Routes>
          <Route path="/about" element = {<About/>}  mode = {mode}/>
        
          <Route path="/" element = {<TextForm heading = "Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode = {mode} showAlert = {showAlert}/>}/>
            
        </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;