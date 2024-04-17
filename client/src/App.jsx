/*eslint-disable*/
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Projects" element={<Projects/>}/>
         <Route path="/SignIn" element={<SignIn/>}/>
         <Route path="/SignUp" element={<SignUp/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;