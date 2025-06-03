import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import WatchPage from './pages/WatchPage';
import Galerya from './pages/Galerya';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="/galerya" element={<Galerya />} />
    </Routes>
  );
}

export default App;
