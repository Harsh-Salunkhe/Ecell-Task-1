import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.png";

function Home(props) {
  const { addTeamMember, updateTeamMember, editingIndex, memberToEdit, switchPage } = props;

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const [Details, setDetails] = useState({
    Name: "",
    position: "",
    Email: "",
    linkedin: "",
    insta: "",
    phone: "",
  });


  useEffect(() => {
    if (memberToEdit) {
      setDetails({
        Name: memberToEdit.Name,
        position: memberToEdit.position,
        Email: memberToEdit.Email,
        linkedin: memberToEdit.linkedin,
        insta: memberToEdit.insta,
        phone: memberToEdit.phone,
      });
      setImage(null); 
    }
  }, [memberToEdit]);

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalImage =
      image instanceof File ? URL.createObjectURL(image) : memberToEdit?.image || null;

    const memberData = {
      ...Details,
      image: finalImage,
    };

    if (editingIndex !== null) {
      updateTeamMember(memberData);
    } else {
      addTeamMember(memberData);
    }

    setDetails({
      Name: "",
      position: "",
      Email: "",
      linkedin: "",
      insta: "",
      phone: "",
    });
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = null;

    switchPage("TeamCard");
  };

  return (
    <div>
    
      <div className="bg-black flex items-center justify-between px-4 md:px-10 py-4 border-b border-yellow-500">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>
        <button
          className="bg-black text-yellow-400 font-semibold px-4 py-2 rounded-xl hover:bg-yellow-600 hover:text-white transition"
          onClick={() => switchPage("TeamCard")}
        >
          View Team
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-black">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl p-8 bg-black text-white rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            {editingIndex !== null ? "Edit Team Member" : "Add Team Member"}
          </h2>

          <div className="flex flex-col space-y-4">
            <input
              value={Details.Name}
              onChange={handleChange}
              name="Name"
              type="text"
              required
              placeholder="Name"
              className="bg-black border border-yellow-500 rounded-xl px-4 py-2 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              value={Details.position}
              onChange={handleChange}
              name="position"
              type="text"
              required
              placeholder="Position"
              className="bg-black border border-yellow-500 rounded-xl px-4 py-2 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              value={Details.Email}
              onChange={handleChange}
              name="Email"
              type="email"
              required
              placeholder="Email"
              className="bg-black border border-yellow-500 rounded-xl px-4 py-2 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              value={Details.linkedin}
              onChange={handleChange}
              name="linkedin"
              type="url"
              required
              placeholder="LinkedIn URL"
              className="bg-black border border-yellow-500 rounded-xl px-4 py-2 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              value={Details.insta}
              onChange={handleChange}
              name="insta"
              type="url"
              required
              placeholder="Instagram URL"
              className="bg-black border border-yellow-500 rounded-xl px-4 py-2 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              value={Details.phone}
              onChange={handleChange}
              name="phone"
              type="number"
              required
              placeholder="Phone Number"
              className="bg-black border border-yellow-500 rounded-xl px-4 py-2 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              ref={fileInputRef}
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              className="bg-black text-yellow-300 border border-yellow-500 rounded-xl px-4 py-2 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
            />

            <button
              type="submit"
              className="mt-6 bg-yellow-400 text-black font-bold py-2 rounded-xl hover:bg-yellow-500 transition"
            >
              {editingIndex !== null ? "Update Member" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
