import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuranPage from './pages/QuranPage';
import AsmaulHusnaPage from './pages/AsmaulHusnaPage';
import AyatPage from './pages/AyatPage';
import BookmarkPage from './pages/BookmarkPage';
import DoaHarianPage from './pages/DoaHarianPage';
import HadistPage from './pages/HadistPage';
import JuzPage from './pages/JuzPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilPage from './pages/ProfilPage';
import SettingsPage from './pages/SettingsPage';
import ShalatPage from './pages/ShalatPage';
import SurahPage from './pages/SurahPage';
import TerakhirDibacaPage from './pages/TerakhirBacaPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/quran" element={<QuranPage/>} />
        <Route path="/asmaulhusna" element={<AsmaulHusnaPage/>} />
        <Route path="/quran/:ayatNumber" element={<AyatPage />} />
        <Route path="/:ayatNumber" element={<AyatPage />} />
        {/* <Route path="/ayat" element={<AyatPage/>} /> */}
        <Route path="/bookmark" element={<BookmarkPage/>} />
        <Route path="/doa" element={<DoaHarianPage/>} />
        <Route path="/hadist" element={<HadistPage/>} />
        <Route path="/juz" element={<JuzPage/>} />
        <Route path="/account" element={<ProfilPage/>} />
        <Route path="/setting" element={<SettingsPage/>} />
        <Route path="/shalat" element={<ShalatPage/>} />
        <Route path="/surah" element={<SurahPage/>} />
        <Route path="/terakhir" element={<TerakhirDibacaPage/>} />
        <Route exact path="*" element={<NotFoundPage />} />
       
      </Routes>
    </Router>
  );
}

export default App
