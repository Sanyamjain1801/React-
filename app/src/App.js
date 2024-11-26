import "./App.css";

import Navbar from "./component/NavbarPage/Navbar";

// import LoginForm from './component/LoginForm/LoginForm';
import Home from "./component/HomePage/Home";
import Manager from "./component/ManagerPortal/Manager";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/portal" element={<Manager />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <LoginForm/> */}
    </>
  );
}

export default App;
