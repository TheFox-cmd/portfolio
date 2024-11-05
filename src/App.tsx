import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contacts" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  )
}

export default App
