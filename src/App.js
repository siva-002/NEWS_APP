import './App.css';
import Home from './Home';
import {Routes,Route} from "react-router-dom"
import News from './News';


function App() {

  return (
    <>
      <Routes>
        <>
          <Route
            index
            path="/"
            element={
              <>
                {" "}
                <Home />
                <News />
              </>
            }
          />
          <Route
            path="/:page"
            element={
              <>
                {" "}
                <Home />
                <News />
              </>
            }
          />
        </>
        {/* <Route
          path="/Entertainment"
          element={<News category="Entertainment" />}
        /> */}
        {/* <Route path="/Sports" element={<News category="Sports" />} />
        <Route path="/Business" element={<News category="Business" />} />
        <Route path="/Health" element={<News category="Health" />} />
        <Route path="/Science" element={<News category="Science" />} /> */}
      </Routes>
    </>
  );
}

export default App;
