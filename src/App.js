import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Read from './pages/Read';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import About from './pages/About';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <MyNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/faq' element={<></>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      <MyFooter/>
    </>
  );
}

export default App;

// simple function components
export function Profile(){
  return(
    <img 
     style={{width: 200}}
     src='https://eduport.webestica.com/assets/images/courses/4by3/08.jpg'/>

 );
}

// object style
const image ={
  width :200,
  display : 'block',
  margin : 'auto',
}




