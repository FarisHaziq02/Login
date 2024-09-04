import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('submitted');
  const navigate = useNavigate(); // Initialize useNavigate

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSubmitRecipeClick = () => {
    navigate('/subrecipe');
  };

  return (
    <section id="profile">
      <div className="user-info">
        <img src="profile photo.webp" alt="User Profile Picture" className="profile-pic" />
        <h2>Username</h2>
        <p className="user-bio">This is the user's bio. It gives a brief description about the user, their cooking interests, and other personal information.</p>
        <button className="edit-profile-btn">Edit Profile</button>
        <button className="logout-btn">Logout</button>
      </div>

      <div className="profile-tabs">
        <button className={`tab ${activeTab === 'submitted' ? 'active' : ''}`} onClick={() => showTab('submitted')}>Submitted Recipes</button>
        <button className={`tab ${activeTab === 'submit' ? 'active' : ''}`} onClick={handleSubmitRecipeClick}>Submit Recipe</button>
      </div>

      <div className={`tab-content ${activeTab === 'submitted' ? 'active' : ''}`}>
        <h3 style={{ color: 'white' }}>Submitted Recipes</h3>
        <ul className="recipe-list">
          <li>
            <img src="recipe photo.jpg" alt="Recipe Thumbnail" />
            <h4>Recipe Title</h4>
            <div className='recipe-details'>
              <p>Brief description of the recipe.</p>
            </div>
          </li>
          {/* More submitted recipes */}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
