// src/pages/Profile.jsx
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import './profile.css';

const Profile = () => {
  const [user] = useAuthState(auth);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmNewPassword) {
      setError('New passwords do not match.');
      return;
    }

    try {
      // Reauthenticate user
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      
      // Update password
      await updatePassword(user, newPassword);
      setSuccess('Password updated successfully.');
      setShowChangePassword(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <h2>Profile</h2>
        <p><strong>Email:</strong> {user.email}</p>
        {!showChangePassword && (
          <p>
            <a href="#!" onClick={() => setShowChangePassword(true)}>Change Password</a>
          </p>
        )}
        {showChangePassword && (
          <form className="change-password-form" onSubmit={handlePasswordChange}>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <button type="submit">Update Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
