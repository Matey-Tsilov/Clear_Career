import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home.jsx";
import { Footer } from "./components/Common/Footer/Footer.jsx";
import { Header } from "./components/Common/Header/Header.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import { Create } from "./components/Create/Create.jsx";
import { Edit } from "./components/Edit/Edit.jsx";
import { Details } from "./components/Details/Details.jsx";
import { Profile } from "./components/UserProfile/UserProfile.jsx";

import { UserContextProvider } from "./contexts/userContext.js";
import { NotifyContextProvider } from "./contexts/notificationContext.js";
import { ModalContextProvider } from "./contexts/modalContext.js";

import "./App.module.css";

import { Login_RegisterGuard } from "./RouteGuards/Login_RegisterGuard.js";

function App() {
  return (
    <div id="wrapper">
      <ModalContextProvider>
        <NotifyContextProvider>
          <UserContextProvider>
            <Header />
            <Routes>
              <Route element={<Login_RegisterGuard />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
            <Footer />
          </UserContextProvider>
        </NotifyContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
