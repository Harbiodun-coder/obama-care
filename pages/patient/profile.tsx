import Layout from '@/components/layout/PatientLayout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Swal from 'sweetalert2';

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    const token = localStorage.getItem('obamacare');
    if (!token) {
      console.error('Token not found');
      return;
    }
    try {
      const response = await fetch('/api/patient/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      const data = await response.json();
      console.log('Fetched data:', data);

      setProfile(data.data);
      setFormData(data.data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Fetching profile...');
    fetchProfile();
  }, []);



  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const updateProfile = async () => {
    const token = localStorage.getItem('obamacare');
    if (!token) {
      console.error('Token not found');
      return;
    }
    try {
      const updatedProfile = { ...formData };
      const response = await fetch('/api/patient/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      });
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      const data = await response.json();
      console.log('Profile updated:', data);

      Swal.fire({
        title: 'Success',
        text: 'Profile Updated Succesfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      setProfile(data.data);
      setFormData(data.data);
    } catch (error) {
      setError(error.message);
      console.error('Error updating profile:', error);
    } finally {
      setIsEditing(false);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <Layout>
      <div className="bg-white p-4 shadow rounded">
        <div className="container py-4 flex justify-between items-center">
          <Link href="/patient" className="text-blue-600 hover:underline">
            <IoMdArrowRoundBack className="w-[100px]" />
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Profile</h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="relative">
                <img
                  src="/patient.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile?.first_name} {profile?.last_name}</h1>
                {isEditing ? (
                  <div className="flex items-center mt-4 space-x-2">
                    <button
                      onClick={updateProfile}
                      className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                    >
                      <FaSave className="mr-2" /> Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="bg-gray-600 text-white px-4 py-2 rounded flex items-center"
                    >
                      <FaTimes className="mr-2" /> Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleEditClick}
                    className="bg-yellow-600 text-white px-4 py-2 rounded flex items-center mt-4"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                      />
                    ) : (
                      <p>{profile?.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={formData?.phone}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                      />
                    ) : (
                      <p>{profile?.phone}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700">Country</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="country"
                        value={formData?.country}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                      />
                    ) : (
                      <p>{profile?.country}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
