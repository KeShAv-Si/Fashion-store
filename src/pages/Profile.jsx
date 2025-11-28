import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      
      if (!token) {
        toast.error("Please login to view your profile");
        navigate("/login");
        return;
      }

      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
        const response = await fetch(`${API_URL}/api/user/profile`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          setUserData(data.user);
        } else {
          toast.error(data.message);
          if (data.message === "Invalid token") {
            localStorage.removeItem("token");
            navigate("/login");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-600">No profile data available</p>
      </div>
    );
  }

  return (
    <div className="border-t pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-2xl mb-8">
          <h1 className="text-3xl font-medium">My Profile</h1>
          <hr className="border-none h-[2px] bg-gray-700 w-20 mt-2" />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Account Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Name
                  </label>
                  <p className="text-lg text-gray-800">{userData.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <p className="text-lg text-gray-800">{userData.email}</p>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Account Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Member Since
                  </label>
                  <p className="text-lg text-gray-800">
                    {new Date(userData.createdAt || Date.now()).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Account Status
                  </label>
                  <p className="text-lg text-green-600 font-medium">Active</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => navigate("/orders")}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                View Orders
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  toast.success("Logged out successfully");
                  navigate("/login");
                }}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
