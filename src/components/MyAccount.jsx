import React from 'react';

const MyAccount = () => {
  // Sample user data (in a real application, this would come from an API)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinedDate: 'January 1, 2023',
  };

  return (
    <div style={accountStyle}>
      <h1>My Account</h1>
      <div style={userInfoStyle}>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined Date:</strong> {user.joinedDate}</p>
      </div>
      <div style={actionsStyle}>
        <button style={buttonStyle}>Edit Profile</button>
        <button style={buttonStyle}>Change Password</button>
      </div>
    </div>
  );
};

// Styles
const accountStyle = {
  padding: '20px',
  textAlign: 'center',
};

const userInfoStyle = {
  marginBottom: '20px',
  textAlign: 'left',
};

const actionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default MyAccount;