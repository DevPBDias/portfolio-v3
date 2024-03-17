import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/layout';
import NotFound from './pages/notFound';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
