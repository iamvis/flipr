import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/sections/ContactForm';
import Clients from './components/sections/Clients';
import Projects from './components/sections/Projects';
import AdminPanel from './components/Admin/AdminPanel';
import Info from './components/sections/info';
import Info2 from './components/sections/info2';

function App() {
  return (
    <>
      <Router>
        {/* Navbar is typically outside of Routes so it stays constant */}
        <Navbar />

        <Routes>
          {/* Define routes here */}
          <Route path="/admin-panel" element={<AdminPanel />} />
          {/* Add more routes if needed */}
        </Routes>

        {/* Static sections */}
        <ContactForm />
        <Info />
        <Info2 />
        <Projects />
        <Clients />
        <Footer />
      </Router>
    </>
  );
}

export default App;
