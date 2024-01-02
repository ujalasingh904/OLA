import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  About  from './components/About';
import  Services  from './components/Services';
import  ContactUs  from './components/ContactUs';
import  KnowMore  from './components/KnowMore';
import Main from "./components/Main";
import Nopage from "./components/Nopage";
import Register from "./components/Register";
import Signin from "./components/Signin";





function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route  exact path="/" element={<About/>}/>
        <Route exact path="/"  element={ <Services/>}/>
        <Route exact path="/"  element={<ContactUs/>}/>
        <Route exact path="/"  element={<KnowMore/>}/> */}
        {/* <Route  exact path="*"  element={<Nopage/>}/> */}
        <Route  index exact path="/" element={<Main/>}/>
        <Route  exact path="/register" element={<Register/>}/>
        <Route  exact path="/signin" element={<Signin/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
