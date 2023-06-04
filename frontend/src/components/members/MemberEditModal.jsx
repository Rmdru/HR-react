import React, { useState, useEffect } from "react";
import axios from "axios";

function MemberEditModal({ id }) {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberTeam, setMemberTeam] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/members/${id}`)
      .then((response) => {
        const memberData = response.data;
        setMemberName(memberData.name);
        setMemberEmail(memberData.email);
        setMemberTeam(memberData.department);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSaveChanges = () => {
    const data = {
      name: memberName,
      email: memberEmail,
      department: memberTeam
    };

    axios
      .post(`http://localhost:5000/api/v1/members/${id}`, data)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteMember = () => {
    axios
      .delete(`http://localhost:5000/api/v1/members/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="modal fade"
      id="MemberEditModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Teamlid aanpassen / verwijderen
            </h5>
            <button
              type="button"
              className="close bg-white border-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="mb-2">
                  Naam
                </label>
                <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={memberName}
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                type="text"
                className="form-control"
                id="email"
                defaultValue={memberEmail}
                value={memberEmail}
                onChange={(e) => setMemberEmail(e.target.value)}
              />
              </div>
              <div className="form-group">
                <label htmlFor="team" className="mb-2">
                  Team
                </label>
                <input
                type="text"
                className="form-control"
                id="team"
                defaultValue={memberTeam}
                value={memberTeam}
                onChange={(e) => setMemberTeam(e.target.value)}
              />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSaveChanges}
            >
              Opslaan
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteMember}
            >
              Verwijderen
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Sluiten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }  

export default MemberEditModal;
