import React, {useEffect, useState} from 'react';

function SurveyIndex() {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/surveys')
            .then(response => response.json())
            .then(data => {
                setSurveys(data);

            })
            .catch(error => {
                console.error('There was a problem fetching data:', error);
            });
    }, []);

    return (
        <table className="table">
            <thead className="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Naam</th>
                <th scope="col">Team</th>
                <th scope="col">Vragen toevoegen</th>
            </tr>
            </thead>
            <tbody>
            {surveys.map(survey => (
                <tr key={survey.id}>
                    <th scope="row">{survey.id}</th>
                    <td>{survey.name}</td>
                    <td>{survey.team.name}</td>
                </tr>
            ))}


            </tbody>
        </table>
    );
}

export default SurveyIndex;
