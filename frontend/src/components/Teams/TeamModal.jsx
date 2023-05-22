import React, { useState } from 'react';

// Define state variable 'teamName' and its setter function
function TeamModal() {
  const [teamName, setTeamName] = useState("");

  // Prepare team data object
  const handleSaveChanges = () => {
    const teamData = {
      name: teamName
    };

  // Create a new team and send it to the server
  const handleCreateTeam = () => {
  };

    // Send a POST request to create a new team
    fetch('http://127.0.0.1:5000/api/v1/team/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(teamData)
    })
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        console.log("Team succesvol aangemaakt:", data); // Log success message
        // Reset the form fields or navigate to a new page
      })
      .catch(error => {
        console.error('Er is een probleem opgetreden bij het maken van het team:', error);
      });
  };

  // Update an existing team and send it to the server
  const handleUpdateTeam = () => {
  };

  // Delete an existing team and send the request to the server
  const handleDeleteTeam = () => {   
  };

  return (
    <div className="modal fade" id="modalTeamModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Team toevoegen</h5>
            <button type="button" className="close bg-white border-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="mb-2">Naam</label>
                <input type="text" className="form-control" id="name" placeholder="Naam" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
              </div>
            </form>
            <ul></ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Opslaan</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sluiten</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamModal;
