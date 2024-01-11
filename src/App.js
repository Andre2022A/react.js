// App.js
import React from 'react';
import './App.css';
import About from './components/About'; // Impor komponen About dari folder components
import Profile from './components/Profile';
import Education from './components/Education';

function App() {
  return (
    <div>

      <About />
      <Profile/>
      <Education/>
    </div>
  );
}

export default App;
