import React from 'react';
import './Profile.css'; // File CSS untuk styling
import yu from '../img/yu.jpg';

const Profile = () => {
  return (
    <div className='body'>
    <div className="profile-container">
      <header className="profile-header">
        <div className='logoyu1' >
      <img src={yu} alt="Foto Profil" className="profile-image" />
      </div>
      <div className='logoyu2'>
        
        
        <h1>Muhamad Andre Riskiawan</h1>
        <p>Saya Adalah Seorang Pelajar SMK</p>
        </div>
      </header>

      <section className="profile-section">
        <div className='profile1'>
        
        <h2>Informasi Pribadi</h2>
        <ul>
          <li><strong>Sekolah:</strong>SMKN 6 Jember</li>
          <li><strong>Kelas:</strong>XII RPL2</li>
          <li><strong>Umur:</strong>17</li>
          <li><strong>Alamat:</strong>Klatakan, Tanggul,Jember</li>
        </ul>

        <h2>Tentang Saya</h2>
        <p>
          Saya adalah seorang pelajar dari SMKN 6 Jember
        </p>
        </div>
        <div className='profile2'>
            
        </div>
      </section>
    </div>
    </div>
  );
}

export default Profile;

