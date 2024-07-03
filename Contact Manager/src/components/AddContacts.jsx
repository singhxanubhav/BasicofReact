import React, { useState } from "react";

const AddContacts = ({addContact}) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAt = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill all the details");
      return;
    }
    addContact(contactData)
    setContactData({name:"", email:""})
    
  };

  return (
    <div className="text-start">
      <div className="font-bold">
        <h1>Add Contact</h1>
      </div>
      <form>
        <label>Name:</label> <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label> <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <br />
      <button
        className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
        onClick={handleAt}
      >
        Add Contact
      </button>
    </div>
  );
};

export default AddContacts;
