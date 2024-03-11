import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
