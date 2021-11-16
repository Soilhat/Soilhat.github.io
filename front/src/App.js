import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./scenes/Home";

function App() {
  return (
    <main className="main">
      <div className="container gutter-top">
        <div className="row">
          <aside className="col-12 col-md-12 col-xl-3">
            <Sidebar/>
          </aside>
          <div className="col-12 col-md-12 col-xl-9">
            <div className="box shadow pb-0">
              <Routes>
                <Route path="/"element={<Home />}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;