import Layout from '@/components/layout/PatientLayout';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEdit, FaSave, FaTimes, FaUpload } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';


const initialProfile = {
  name: 'Matthew',
  email: 'matthewabiodun2001@gmail.com',
  phone: '+1234567890',
  address: '123 Main St, Anytown, USA',
  medicalConditions: 'Malaria',
  allergies: 'None',
  medications: 'None',
  profileImage: '/patient.png', 
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [image, setImage] = useState<File | null>(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setFormData(profile);
    setImage(null); 
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setProfile(prevProfile => ({
      ...prevProfile,
      ...formData,
      profileImage: image ? URL.createObjectURL(image) : prevProfile.profileImage, 
    }));
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-4 shadow rounded">
      <div className="container  py-4 flex justify-between items-center">
          <Link href="/patient" className="text-blue-600 hover:underline">
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
              <div className="md:col-span-2">
                <label className="block text-gray-700">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                ) : (
                  <p>{profile.address}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Medical Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Medical Conditions</label>
                {isEditing ? (
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    rows={4}
                  />
                ) : (
                  <p>{profile.medicalConditions}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Allergies</label>
                {isEditing ? (
                  <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    rows={4}
                  />
                ) : (
                  <p>{profile.allergies}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Medications</label>
                {isEditing ? (
                  <textarea
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    rows={4}
                  />
                ) : (
                  <p>{profile.medications}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
