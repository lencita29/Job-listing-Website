import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


const AdminProfile = () => {


  const cardStyle = {
    width: '400px',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: 'rgba(240, 240, 240, 0.5)', // More transparent background color for the card
    color: '#2c3e50', // Dark text color
    margin: 'auto',
    marginTop: '50px',
    marginLeft: '10%', // Adjust the left margin
    position: 'fixed',
    top: '40%',
    transform: 'translateY(-50%)',
    opacity: '0.8', // Set opacity for the watermark effect
    fontWeight: 'bold', // Set font weight to bold
  };

  const pageStyle = {
  
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Add a shadow around the page
  
  };


  const [loggedInAdmin, setLoggedInAdmin] = useState(null);
  const [editedProfile, setEditedProfile] = useState({
    email: '',
    adminname: '',
    dob: '',
    starredCompanies: [],
  });

  useEffect(() => {
    // Fetch user information from local storage
    const storedAdmin = JSON.parse(localStorage.getItem('loggedInAdmin')) || {};
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      ...storedAdmin,
    }));
  }, []);

  useEffect(() => {
    // Fetch user information from local storage
    const storedAdmin = JSON.parse(localStorage.getItem('loggedInAdmin'));
    setLoggedInAdmin(storedAdmin);
  }, []);

 

  
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState('');
  const nav=useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleLogout = () => {
    // Clear user information from local storage on logout
    localStorage.removeItem('loggedInAdmin');
    setLoggedInAdmin(null);
    nav('/')
  };

  const saveProfile = () => {
   
    alert('Profile saved successfully!');
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <Typography variant="h4" align="center" gutterBottom>
          PROFILE
        </Typography>
        <form>
          <TextField
            type="email"
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
            value={editedProfile.email}
          />
          <TextField
            type="text"
            name="adminname"
            label="Adminname"
            fullWidth
            margin="normal"
            placeholder="Enter your name"
            value={editedProfile.adminname}
            onChange={handleInputChange}
          />
          <TextField
            type="date"
            name="dob"
            label="Date of Birth"
            fullWidth
            margin="normal"
            value={editedProfile.dob}
            onChange={handleInputChange}
          />
          <TextField
            type="text"
            name="role"
            label="Role"
            fullWidth
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          
          <h4 style={{margin:"auto"}}>Upload your resume</h4>
          <TextField
            type="file"
            accept=".pdf,.doc,.docx"
            label="Upload Resume"
            onChange={handleResumeUpload}
            style={{ marginTop: '20px' }}
          />
          <Button
            variant="contained"
            color="success"
            size="small"
            endIcon={<SaveIcon />}
            style={{ width: '100%', marginTop: '20px' }}
            onClick={saveProfile}
          >
            Save Profile
          </Button>
        
          <Button 
          variant="contained"
          color="error"
          size="small" 
          onClick={handleLogout}>
            Logout
            </Button>
        
        </form>
       



      </div>
    </div>
  );
};

export default AdminProfile;