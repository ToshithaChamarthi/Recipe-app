import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import IndexPage from "./index.jsx";
import HomePage from "./home.jsx";
import Navbar from "./navbar.jsx";
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/next" element={<HomePage/>}/>
      </Routes>
    </Router> 
    </> 
  );
}
export default App;
