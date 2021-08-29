import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Github = lazy(() => import("./components/github/Github"));
const Editor = lazy(() => import("./pages/editor/Editor"));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loading ... </div>}>
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
