import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className='body1'>
    <div className='education'>
    <div className="education1">
      <h2>Riwayat Pendidikan</h2>
      <div className='ed'>
      <div className="education-item">
        <h3>TK</h3>
        <p className="degree">TK PGRI 01 Gambirono</p>
        <p className="date">2010 - 2012</p>
      </div>

      <div className="education-item">
        <h3>SD</h3>
        <p className="degree">SDN Klatakan 01</p>
        <p className="date">2012 - 2017</p>
      </div>

      <div className="education-item">
        <h3>SMP</h3>
        <p className="degree">SMPN 02 Tanggul</p>
        <p className="date">2018 - 2020</p>
      </div>

      <div className="education-item">
        <h3>SMK</h3>
        <p className="degree">SMKN 6 Jember</p>
        <p className="date">2021 - 2024</p>
      </div>
      </div>
    </div>
 
    </div>
    </div>
  );
}


export default Education;
