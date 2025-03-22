import React, { useState } from 'react';
import './UserProfile.css'; // Import the CSS file here

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    location: '',
    profileImage: '',
    coverImage: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1050&q=80',
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    setEditing(false);
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({
        ...user,
        profileImage: URL.createObjectURL(file), // Preview the uploaded profile image
      });
    }
  };

  const handleCoverImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({
        ...user,
        coverImage: URL.createObjectURL(file), // Preview the uploaded cover image
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        {/* Cover photo section with upload functionality */}
        <div
          className="cover-photo"
          style={{
            backgroundImage: `url(${user.coverImage})`,
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImageUpload}
            className="cover-image-upload"
          />
        </div>

        <div className="card-body position-relative">
          {/* Profile image with upload functionality */}
          <img
            src={user.profileImage || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-image"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageUpload}
            className="profile-image-upload"
          />

          <div className="info-section">
            {editing ? (
              <>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <>
                <h3>{user.name}</h3>
                <p className="text-muted mb-1">{user.email}</p>
                <p className="mb-1">{user.location}</p>
                <p>{user.bio}</p>
                <button className="btn btn-secondary mt-2" onClick={() => setEditing(true)}>
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
