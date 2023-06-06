import React, {useState, useEffect} from "react";
import axios from "axios";

function MemberEditModal({memberId, onClose}) {
    const [memberName, setMemberName] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    const [memberTeam, setMemberTeam] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/v1/members/${memberId}`)
            .then((response) => {
                const memberData = response.data.member;
                setMemberName(memberData.name);
                setMemberEmail(memberData.email);
                setMemberTeam(memberData.department);       
            })
            .catch((error) => {
                console.log(error);
            });
    }, [memberId]);

    const handleSaveChanges = () => {
        const data = {
            name: memberName,
            email: memberEmail,
            department: memberTeam,      
        };

        axios
            .post(`http://localhost:5000/api/v1/members/${memberId}`, data)
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDeleteMember = () => {
        axios
            .delete(`http://localhost:5000/api/v1/members/${memberId}`)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                window.location.reload();
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
                            onClick={onClose}
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
                                    name={"name"}
                                    value={memberName}
                                    placeholder="Naam"
                                    onChange={(e) => setMemberName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" className="mb-2">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name={"email"}
                                    value={memberEmail}
                                    placeholder="Email"
                                    onChange={(e) => setMemberEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" className="mb-2">
                                    Naam
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="team"
                                    name={"team"}
                                    value={memberTeam}
                                    placeholder="Team"
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
                            onClick={onClose}
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
