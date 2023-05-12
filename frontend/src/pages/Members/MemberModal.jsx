import React, {useEffect, useState} from 'react';

function CreateMemberModal() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/members')
            .then(response => response.json())
            .then(data => {
                setMembers(data);
            })
            .catch(error => {
                console.error('There was a problem fetching data:', error);
            });
    }, []);

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Teamlid toevoegen</h5>
                        <button type="button" className="close bg-white border-0" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="/api/member/create" method={"POST"}>
                            <div className="form-group">
                                <label htmlFor="name" className={"mb-2"}>Naam</label>
                                <input type="text" className="form-control" id="name" placeholder="Naam"/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="member" className={"mb-2"}>Teamlid</label>
                                <select id="member" className={"form-control"} name="member" multiple={true}>
                                    {members.map(member => (
                                        <option key={member.id} value={member.id}>{member.name}</option>
                                    ))}
                                </select>
                            </div>
                        </form>
                        <ul>

                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Sluiten</button>
                        <button type="button" className="btn btn-primary">Wijzigingen opslaan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMemberModal;