import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import CreateForm from "./components/pages/CreateForm";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreateForm />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
