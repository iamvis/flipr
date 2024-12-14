import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';

const ContactForm = lazy(() => import('./components/sections/ContactForm'));
const Clients = lazy(() => import('./components/sections/Clients'));
const Projects = lazy(() => import('./components/sections/Projects'));
const AdminPanel = lazy(() => import('./components/Admin/AdminPanel'));
const Info = lazy(() => import('./components/sections/info'));
const Info2 = lazy(() => import('./components/sections/info2'));

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>

        {/* Static sections */}
        <ContactForm />
        <Info />
        <Info2 />
        <Projects />
        <Clients />
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
