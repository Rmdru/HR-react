import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [teamModal, setTeamModal] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/teams/all')
      .then(response => response.json())
      .then(data => {
        setTeams(data);
      })
      .catch(error => {
        console.error('Er is een probleem bij het ophalen van gegevens:', error);
      });
  }, []);

  const handleOpenModal = () => {
    setTeamModal(true);
  };

  const handleCloseModal = () => {
    setTeamModal(false);
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Naam</th>
            <th scope="col">Teamleden per team</th>
            <th scope="col">...</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <th scope="row">{team.id}</th>
              <td>{team.name}</td>
              <td>
              <a href="#" className="btn btn-primary" data-toggle="modal">Teamleden</a>
              </td>
              <td>
              <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#TeamEditModal">Aanpassen</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamList;
