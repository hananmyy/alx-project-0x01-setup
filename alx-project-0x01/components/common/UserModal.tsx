import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="input-style" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="input-style" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="input-style" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="input-style" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="input-style" />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-800">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;