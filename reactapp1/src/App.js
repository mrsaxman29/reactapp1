import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import BG_Transition from './BG_Transition';
import Projects from './Projects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  
  return (
  

  <Router>
  <>

    <Header></Header>

    <Routes>
      <Route exact path="/" element={<><BG_Transition/><Body/></>}/>
      <Route exact path="/projects" element={<Projects/>}/>
      
    </Routes>

    <Footer></Footer>

  </>

  </Router>



  );
}

export default App;
