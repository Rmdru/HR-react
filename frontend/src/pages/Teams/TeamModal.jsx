import React, {useEffect, useState} from 'react';

function CreateTeamModal() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/teams')
            .then(response => response.json())
            .then(data => {
                setTeams(data);
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
                        <h5 className="modal-title" id="exampleModalLongTitle">Team toevoegen</h5>
                        <button type="button" className="close bg-white border-0" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="/api/team/create" method={"POST"}>
                            <div className="form-group">
                                <label htmlFor="name" className={"mb-2"}>Naam</label>
                                <input type="text" className="form-control" id="name" placeholder="Naam"/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="team" className={"mb-2"}>Team</label>
                                <select id="team" className={"form-control"} name="team" multiple={true}>
                                    {teams.map(team => (
                                        <option key={team.id} value={team.id}>{team.name}</option>
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

export default CreateTeamModal;