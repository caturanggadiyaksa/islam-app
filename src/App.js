import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AsmaulHusna from './pages/AsmaulHusnaPage';
import NotFound from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <Router>
            <Routes>
              <Route exact path='/' element={< HomePage />}></Route>
              {/* <Route exact path='/quran' element={< Quran />}></Route> */}
              {/* <Route exact path='/juz' element={< Juz />}></Route> */}
              {/* <Route exact path='/salat' element={< Salat />}></Route> */}
              <Route exact path='/asmaulhusna' element={< AsmaulHusna />}></Route>
              {/* <Route exact path='/doa' element={< DoaHarian />}></Route> */}
              {/* <Route exact path='/hadist' element={< Hadist />}></Route> */}
              {/* <Route exact path='/tahlil' element={< DoaTahlil />}></Route> */}
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Router>

          

        </div>


      </div>
    );
  }
}

export default App;
