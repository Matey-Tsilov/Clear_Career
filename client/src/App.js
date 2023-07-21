import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home.jsx";
import { Footer } from "./components/common/Footer/Footer.jsx";
import { Header } from "./components/common/Header/Header.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { Create } from "./components/Create/Create.jsx"
import { Register } from "./components/Register/Register.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Edit } from "./components/Edit/Edit.jsx";
import { Details } from "./components/Details/Details.jsx"

import "./App.module.css"

function App() {
  return (
    <div id="wrapper">
      <Header />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/create" element={<Create />}/>
              <Route path="/edit/:id" element={<Edit />}/>
              <Route path="/details/:id" element={<Details />}/> 
          </Routes>
      <Footer />
    </div>
  )
}

export default App;
