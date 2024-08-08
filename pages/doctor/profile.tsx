import Layout from '@/components/layout/DoctorLayout';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes, FaUpload } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Swal from 'sweetalert2';

const Profile = () => {
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    specialty: [],
    available_times: '',
    availability: false,
  });
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    const token = localStorage.getItem('obamacare');
    if (!token) {
      console.error('Token not found');
      return;
    }
    try {
      const response = await fetch('/api/doctor/profile', {
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
      setProfile(data.data);
      setFormData(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const updateProfile = async () => {
    const token = localStorage.getItem('obamacare');
    if (!token) {
      console.error('Token not found');
      return;
    }
    try {
      const updatedProfile = {
        ...formData,
      };

      const response = await fetch('/api/doctor/update-profile', {
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
      Swal.fire({
        title: 'Success',
        text: 'Profile Updated Successfully',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      setProfile(data.data);
      setFormData(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  

  const handleCancelClick = () => {
    setFormData(profile);
    setImage(null);
    setIsEditing(false);
  };
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setFormData(prevData => ({ ...prevData, availability: isChecked }));
    console.log('availability', isChecked);  
  };

  return (
    <Layout>
      <div className="bg-white p-4 shadow rounded">
        <div className="container py-4 flex justify-between items-center">
          <Link href="/doctor" className="text-blue-600 hover:underline">
            <IoMdArrowRoundBack className="w-[100px]" />
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Profile</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="relative">
            <img
              src="/patient.png"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Dr. {profile?.first_name} {profile?.last_name}</h1>
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
                onClick={() => setIsEditing(true)}
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
                    value={formData.email}
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <p>{profile?.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Specialty</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <p>{profile?.specialty?.join(', ')}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Available</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="specialty"
                    value={formData.available_times}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <p>{profile?.available_times}</p>
                )}
              </div>
            </div>
          </div>

         

          <div>
            <h2 className="text-xl font-semibold mb-2">Active Status</h2>
            <div>
              {isEditing ? (
                <label className="flex bg-blue-800 cursor-pointer relative w-[80px] h-[40px] rounded-full  ">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={formData.availability}
                    onChange={handleToggleChange}
                    className=" sr-only peer "
                  />
                  <span className="w-2/5 h-4/5 bg-gray-400  absolute rounded-full left-1 top-1 peer-checked:bg-[white] peer-checked:left-11 transition-all duration-500" />
                 
                </label>
              ) : (
                <p>{profile.availability ? 'Active' : 'Inactive'}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
