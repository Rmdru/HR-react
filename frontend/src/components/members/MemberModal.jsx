import React, { useState } from 'react';

// Define state variables 'memberName' and 'memberEmail' and their setter functions
function MemberModal() {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");

  // Prepare member data object
  const handleSaveChanges = () => {
    const memberData = {
      name: memberName,
      email: memberEmail
    };

  // Create a new member and send it to the server
  const handleCreateMember = () => {
  };

    // Send a POST request to create a new member
    fetch('http://127.0.0.1:5000/api/v1/member/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memberData)
    })
      .then(response => response.json()) // Convert response to JSON
      .then(data => {
        console.log("Lid succesvol aangemaakt:", data); // Log success message
        // Reset the form fields or navigate to a new page
      })
      .catch(error => {
        console.error('Er is een probleem opgetreden bij het maken van het lid:', error);
      });
  };

  // Update an existing member and send it to the server
  const handleUpdateMember = () => {
  };

  // Delete an existing member and send the request to the server
  const handleDeleteMember = () => {   
  };

  return (
    <div className="modal fade" id="modalMemberModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Teamlid toevoegen</h5>
            <button type="button" className="close bg-white border-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="mb-2">Naam</label>
                <input type="text" className="form-control" id="name" placeholder="Naam" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="mb-2">Email</label>
                <input type="text" className="form-control" id="email" placeholder="Email" value={memberEmail} onChange={(e) => setMemberEmail(e.target.value)} />
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

export default MemberModal;
