import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Initiation from './components/pages/forms/Initiation';
import Navbarr from './components/shared/Navbarr';
import Req from './components/pages/forms/Req';
import Design from './components/pages/forms/Design';
import Pre from './components/pages/Pre';
import All from './components/pages/Alldocuments/All';
import Alldoc from './components/pages/Alldocuments/Alldoc';







function App() {
  return (
    <div className="App">
      <Navbarr></Navbarr>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/int' element={<Initiation />}></Route>
          <Route path='/reqq' element={<Req />}></Route>
          <Route path='/des' element={<Design />}></Route>
          <Route path='/pree' element={<Pre></Pre>}/>
          <Route path='/alll' element={<All/>}/>
          <Route path='/alldoc' element={<Alldoc/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
