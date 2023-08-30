import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home.jsx";
import { Footer } from "./components/Common/Footer/Footer.jsx";
import { Header } from "./components/Common/Header/Header.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { Create } from "./components/Create/Create.jsx";
import { Edit } from "./components/Edit/Edit.jsx";
import { Details } from "./components/Details/Details.jsx";
import { Profile } from "./components/UserProfile/UserProfile.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";


import { NotifyContextProvider } from "./contexts/notificationContext.js";
import { UserContextProvider } from "./contexts/userContext.js";
import { ModalContextProvider } from "./contexts/modalContext.js";

import "./App.module.css";

import { SignUpGuard } from "./RouteGuards/Login_RegisterGuard.js";

function App() {
  return (
    <div id="wrapper">
      <ModalContextProvider>
        <NotifyContextProvider>
          <UserContextProvider>
            <Header />
            <Routes>
              <Route element={<SignUpGuard />}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
              </Route>
                <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/users/:id" element={<Profile />} />
            </Routes>
            <Footer />
          </UserContextProvider>
        </NotifyContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
