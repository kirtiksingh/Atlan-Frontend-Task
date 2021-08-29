import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Editor = lazy(() => import("./pages/editor/Editor"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Github = lazy(() => import("./components/github/Github"));
const WifiLoader = lazy(() => import("./components/wifi-loader/WifiLoader"));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={WifiLoader}>
        <Router>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/editor' exact component={Editor} />
          <Route path='/github' exact component={Github} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
