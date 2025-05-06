import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import { getUsers, updateUser } from "../services/userService";

const EditPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const users = await getUsers();
        const foundUser = users.find((user) => user.id === userId);

        if (foundUser) {
          setUser(foundUser);
          setName(foundUser.name);
          setPassword("");
        } else {
          setError("User not found");
        }
      } catch (err) {
        setError("Error loading user data");
        console.error("Error fetching user", err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = { name };
      if (password) {
        updateData.password = password;
      }

      await updateUser(userId, updateData);

      navigate("/");
    } catch (err) {
      setError("Failed to update user");
      console.error("Error updating user", err);
    }
  };

  if (loading) {
    return (
      <div className="w-full">
        <Navbar />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <Navbar />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar />
    </div>
  );
};

export default EditPage;
