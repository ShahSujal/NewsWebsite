import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize="9"
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize="9" country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize="9"
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News key="scienc" pageSize="9" country="in" category="science" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize="9"
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize="9" country="in" category="health" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize="9"
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
