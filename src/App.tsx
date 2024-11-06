import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/profile/profile'
import Contact from './components/contacts/contact'; 
import { useEffect, useState } from 'react';
// import NotFound from './NotFound'; // Optional: Not found component

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    }
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  console.log(path);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contacts" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} />  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
