import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Createuser = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://backendhost-npt5.onrender.com/api/user/create", formData)
      .then((response) => {
        alert("User created successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        alert("Failed to create user. Please try again.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#eef2f3", 
        height: "100vh",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#333", fontFamily: "Arial, sans-serif" }}>Create User</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          backgroundColor: "#fdfdfd",
          borderRadius: "15px", 
          border: "1px solid #e0e0e0",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", 
          transition: "transform 0.2s",
        }}
      >
        <label style={{ fontSize: "14px", color: "#555" }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0px 2px 5px rgba(0, 0, 0, 0.05)",
              marginTop: "5px",
            }}
          />
        </label>
        <label style={{ fontSize: "14px", color: "#555" }}>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0px 2px 5px rgba(0, 0, 0, 0.05)",
              marginTop: "5px",
            }}
          />
        </label>
        <label style={{ fontSize: "14px", color: "#555" }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "inset 0px 2px 5px rgba(0, 0, 0, 0.05)",
              marginTop: "5px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Create User
        </button>
      </form>
      <Link
        to="/"
        style={{
          marginTop: "20px",
          textDecoration: "none",
          color: "#007bff",
          fontWeight: "bold",
        }}
      >
        Back to User List
      </Link>
    </div>
  );
};

export default Createuser;
