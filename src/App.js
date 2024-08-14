import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Music from './components/music/Music';
import Pnf from './components/layouts/Pnf';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Routes path={`/`} element={<Music/>}/>
        <Routes path={`/music`} element={<Music/>}/>
        <Routes path={`/*`} element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
