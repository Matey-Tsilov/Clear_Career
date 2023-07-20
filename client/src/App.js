import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Create } from "./components/Create/Create.jsx"
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { Edit } from "./components/Edit/Edit";
import { Details } from "./components/Details/Details.jsx"

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
