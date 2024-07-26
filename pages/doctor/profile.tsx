import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/DoctorLayout";
import Image from "next/image";

export default function ProfilePage() {
  const [profile, setProfile] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialty: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialty: "",
  });

  const fetchProfile = async () => {
    try {
      const response = await fetch("/mockUserData.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProfile(data.profile || {});
    } catch (error) {
      console.log("Failed to fetch profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Profile Picture and Name Section */}
          <div className="flex-none w-auto lg:w-1/3 flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
            <Image src="/tes1.jpg" width={100} height={100} alt="LOGO" className="h-24 w-24 rounded-full" />
            <div className="text-center md:pt-4">
              <h2 className="text-xl font-semibold">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-lg text-gray-500">{profile.specialty}</p>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="flex-1 bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <strong className="text-sm lg:text-base">First Name:</strong>
                <p className="text-sm lg:text-base">{profile.firstName}</p>
              </div>
              <div>
                <strong className="text-sm lg:text-base">Last Name:</strong>
                <p className="text-sm lg:text-base">{profile.lastName}</p>
              </div>
              <div>
                <strong className="text-sm lg:text-base">Email:</strong>
                <p className="text-sm lg:text-base">{profile.email}</p>
              </div>
              <div>
                <strong className="text-sm lg:text-base">Phone:</strong>
                <p className="text-sm lg:text-base">{profile.phone}</p>
              </div>
              <div>
                <strong className="text-sm lg:text-base">Specialty:</strong>
                <p className="text-sm lg:text-base">{profile.specialty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
