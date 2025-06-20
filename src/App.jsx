import React, { useState } from "react";
import Home from "./components/home";
import TeamCard from "./components/user";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("Home");
  const [teamMembers, setTeamMembers] = useState([]);
 const [editingIndex, setEditingIndex] = useState(null);
 
  function addTeamMember(newMember) {
    setTeamMembers([...teamMembers, newMember]);
  }

  function deleteMember(index) {
    const updated = [...teamMembers];
    updated.splice(index, 1);
    setTeamMembers(updated);
  }
  function updateTeamMember(updatedMember) {
  setTeamMembers((prev) =>
    prev.map((member, i) => (i === editingIndex ? updatedMember : member))
  );
  setEditingIndex(null); 
}

  return (
    <div className="App">
      {current === "Home" ? (
        <Home
          switchPage={() => setCurrent("TeamCard")}
          addTeamMember={addTeamMember}
          updateTeamMember={updateTeamMember}
    editingIndex={editingIndex}
    memberToEdit={editingIndex !== null ? teamMembers[editingIndex] : null}
        />
      ) : (
        <TeamCard
          switchPage={() => setCurrent("Home")}
          teamMembers={teamMembers}
          deleteMember={deleteMember}
          editMember={(index) => {
  setEditingIndex(index);
  setCurrent("Home");
}}

        />
      )}
    </div>
  );
}

export default App;
