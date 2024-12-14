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
    <div className="p-6 bg-gray-100 min-h-screen">
      {profile ? (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-blue-600">Welcome, {profile.username}</h1>
          <p className="text-gray-700 mt-4">Admin ID: {profile._id}</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
