
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Algorithms from "./pages/Algorithms";
import Profile from "./pages/Profile";
import Missions from "./pages/Missions";


export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Header />

        <div className="app-body">
          <Sidebar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/profile" element={<Profile />} />

              <Route path="/classes" element={<Classes />} />
              <Route path="/classes/:id" element={<Classes />} />

              <Route path="/missions" element={<Missions />} />
              <Route path="/missions/:id" element={<Missions />} />

              <Route path="/algorithms" element={<Algorithms />} />
              <Route path="/algorithms/:id" element={<Algorithms />} />

              <Route
                path="*"
                element={
                  <div className="empty-state">
                    <h2>Documento no encontrado</h2>
                    <p>Este archivo no existe en el índice actual.</p>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}
