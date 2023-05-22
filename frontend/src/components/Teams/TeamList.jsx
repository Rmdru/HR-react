import React, { useEffect, useState } from 'react';
import TeamModal from './TeamModal';

// Define state variable 'teams' and its setter function 'setTeams'
function TeamList() {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('http://127.0.0.1:5000/api/v1/team/all')
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        setTeams(data); // Update 'teams' state with fetched data
      })
      .catch(error => {
        console.error('Er is een probleem bij het ophalen van gegevens:', error); // Log error if fetching fails
      });
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Naam</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <th scope="row">{team.id}</th>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && <TeamModal closeModal={handleCloseModal} />}
    </div>
  );
}

export default TeamList;
