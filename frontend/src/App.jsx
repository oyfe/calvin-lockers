import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/pricing" element={<h1>Pricing Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
