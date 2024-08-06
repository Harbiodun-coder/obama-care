
import Layout from '@/components/layout/DoctorLayout';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes, FaUpload } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    officeAddress: '',
    bio: '',
    profileImage: '',
  });
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/doctor/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setProfile(data.profile);
      setFormData(data.profile);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSaveClick = async () => {
    try {
      const updatedProfile = {
        ...formData,
        profileImage: image ? URL.createObjectURL(image) : profile.profileImage,
      };

      const response = await fetch('/api/doctor/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedProfile),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      setProfile(data.profile);
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

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);

    }
  };

  const handleCancelClick = () => {
    setFormData(profile);
    setImage(null);
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="bg-white p-4 shadow rounded">
      <div className="container  py-4 flex justify-between items-center">
          <Link href="/doctor" className="text-blue-600 hover:underline">
            <IoMdArrowRoundBack className="w-[100px] " />
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Profile</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="relative">
            <img
              src={image ? URL.createObjectURL(image) : profile.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            {isEditing && (
              <label
                htmlFor="profileImage"
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer"
              >
                <FaUpload />
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            {isEditing ? (
              <div className="flex items-center mt-4 space-x-2">
                <button
                  onClick={handleSaveClick}
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
                  <p>{profile.email}</p>
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
                  <p>{profile.phone}</p>
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
                  <p>{profile.specialty}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700">Office Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="officeAddress"
                    value={formData.officeAddress}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <p>{profile.officeAddress}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Bio</h2>
            <div>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  rows={4}
                />
              ) : (
                <p>{profile.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
