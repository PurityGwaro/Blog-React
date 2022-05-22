import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          {/* <Home/> */}
          <Routes>{/* ensueres only one route is output into the browser at any given time*/} 
            {/* all of our routes go inside the routes component*/}
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/create' element={<Create />}/>
            <Route exact path='/blogs/:id' element={<BlogDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
