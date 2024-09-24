import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/profile'
import Contact from './components/contacts/contact'; 
// import NotFound from './NotFound'; // Optional: Not found component

function App() {

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
