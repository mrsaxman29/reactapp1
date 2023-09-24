import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import BG_Transition from './BG_Transition';
import Projects from './Projects';
import Bio from './Bio';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  
  return (
  

  <Router>
  <>

    <Header></Header>

    <Routes>
      <Route exact path="/" element={<><BG_Transition/></>}/>
      <Route exact path="/projects" element={<Projects/>}/>
      <Route exact path="/bio" element={<Bio/>}/>
      
    </Routes>

    <Footer></Footer>

  </>

  </Router>



  );
}

export default App;
