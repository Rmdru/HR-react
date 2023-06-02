import React, { useState } from "react";
import axios from "axios";

function MemberEditModal() {
  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberTeam, setMemberTeam] = useState("");
  const [actionType, setActionType] = useState("change");

  const handleSaveChanges = () => {
    if (actionType === "change") {
      let data = JSON.stringify({
        name: memberName,
        email: memberEmail,
        department: memberTeam
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:5000/api/members/create",
        headers: {
          "Content-Type": "application/json"
        },
        data: data
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (actionType === "delete") {
      // Logic to delete the team
      let config = {
        method: "delete",
        url: "http://127.0.0.1:5000/api/v1/members/delete",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          teamName: memberTeam
        }
      };

  return (
    <div
      className="modal fade"
      id="modalMemberEditModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {actionType === "change" ? "Teamlid wijzigen" : "Teamlid verwijderen"}
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
                  placeholder="Vul een naam in"
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
                  placeholder="Vul een email in"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="team" className="mb-2">
                  {actionType === "change" ? "Nieuw team" : "Te verwijderen team"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="team"
                  value={memberTeam}
                  onChange={(e) => setMemberTeam(e.target.value)}
                  placeholder={actionType === "change" ? "Vul een team in" : "Vul een teamnaam in om te verwijderen"}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            {actionType === "change" ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveChanges}
              >
                Opslaan
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleSaveChanges}
              >
                Verwijderen
              </button>
            )}
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
}
}

export default MemberEditModal;
