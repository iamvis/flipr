import React, { useEffect, useState } from 'react';
import { getAdminProfile } from '../API/api';

const AdminProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await getAdminProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error.response?.data?.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      {profile ? (
        <div>
          <h1>Welcome, {profile.username}</h1>
          <p>Admin ID: {profile._id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminProfile;
