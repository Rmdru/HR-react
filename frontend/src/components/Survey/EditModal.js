import React, {useEffect, useState} from 'react';

function EditModal() {
    const [teams, setTeams] = useState([]);
    const [surveyName, setSurveyName] = useState("");
    const [selectedTeams, setSelectedTeams] = useState([]);

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

    const handleSaveChanges = () => {
        const surveyData = {
            name: surveyName,
            teams: selectedTeams
        };

        fetch('http://127.0.0.1:5000/api/surveys/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surveyData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Survey created successfully:", data);
                // Reset form fields or navigate to a new page
            })
            .catch(error => {
                console.error('There was a problem creating the survey:', error);
            });
    };
    return (
        <div className="modal fade" id="modalEditSurvey" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Vragenlijst aanpassen</h5>
                        <button type="button" className="close bg-white border-0" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name" className="mb-2">Naam</label>
                                <input type="text" className="form-control" id="name" placeholder="Naam"
                                       value={surveyName} onChange={(e) => setSurveyName(e.target.value)}/>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="team" className="mb-2">Team</label>
                                <select id="team" className="form-control" name="team" value={selectedTeams} multiple={true}
                                        onChange={(e) => setSelectedTeams(Array.from(e.target.selectedOptions, option => option.value))}>
                                    {teams.map(team => (
                                        <option key={team.id} value={team.id}>{team.name}</option>
                                    ))}
                                </select>
                            </div>
                        </form>
                        <ul></ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;