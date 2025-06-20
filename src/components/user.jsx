import React, { useMemo,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faTrash,faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Profile from "../assets/logo.png"; 


const TeamCard = (props) => {
  const { teamMembers, deleteMember, switchPage } = props;
 const getImageSrc = (image) => image || Profile;



  return (
    <div className="min-h-screen bg-black text-yellow-400 font-sans">
      <header className="bg-yellow-500 p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <img src={Profile} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="ml-4 text-2xl font-bold text-black">Team Members</span>
        </div>

        <button
          onClick={switchPage}
          className="bg-black text-yellow-400 font-semibold px-4 py-2 rounded-xl hover:bg-yellow-600 hover:text-white transition"
        >
          Back To Home
        </button>
      </header>

      <section className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300">
          Meet Our Team
        </h1>
        <p className="text-yellow-200 mt-2 text-lg">People who make it happen</p>
      </section>

      <section className="px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-black border-2 border-yellow-500 rounded-2xl shadow-lg p-6 text-center hover:shadow-yellow-400 transition duration-300"
            >
              <img
                  src={member.image || Profile}
                alt={member.Name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-yellow-500"
              />
              <h2 className="text-xl font-bold text-yellow-300">{member.Name}</h2>
              <p className="text-yellow-200 mb-4">{member.position}</p>
              <div className="flex justify-center gap-4 text-yellow-400 text-xl">
                <a href={member.insta} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="hover:text-white" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="hover:text-white" />
                </a>
                <a href={`mailto:${member.Email}`}>
                  <FontAwesomeIcon icon={faEnvelope} className="hover:text-white" />
                </a>
              </div>
              <button
                onClick={() => deleteMember(index)}
                className="mt-2 text-sm text-red-500 hover:underline"
              >
                 <FontAwesomeIcon icon={faTrash} className="hover:text-white" />
              </button>
              <button
 onClick={() => props.editMember(index)}

  className="mt-1 text-sm text-blue-400 hover:underline ml-4"
>
 <FontAwesomeIcon icon={faPenToSquare} className="hover:text-white" />
</button>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default TeamCard;