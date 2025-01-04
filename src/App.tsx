import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import BlogPage from "./components/Blog/Blog";
import Results from "./components/Disease/Result";
import Analysis from "./components/Disease/Analysis";
import UploadFile from "./components/Disease/UploadFile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/results" element={<Results />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
