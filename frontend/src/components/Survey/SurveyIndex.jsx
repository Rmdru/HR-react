import React, {useEffect, useState} from 'react';
import QuestionCreateModal from "../../components/Questions/QuestionCreateModal";

function SurveyIndex() {
    const [surveys, setSurveys] = useState([]);
    const [modalSurveyId, setModalSurveyId] = useState(null);

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


    const handleOpenModal = (surveyId) => {
        setModalSurveyId(surveyId);
    };

    return (
        <>
            {modalSurveyId && (
                <QuestionCreateModal surveyId={modalSurveyId}/>
            )}

            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Naam</th>
                    <th scope="col">Team</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {surveys.map((survey) => (
                    <tr key={survey.id}>
                        <th scope="row">{survey.id}</th>
                        <td>{survey.name}</td>
                        <td>
                            {survey.teams.map((team) => (
                                <span key={team.id}>{team.name}<br/></span>
                            ))}
                        </td>
                        <td>
                            <a
                                href="#"
                                className="btn btn-primary"
                                data-toggle="modal"
                                data-target="#modalEditSurvey"
                                onClick={() => setModalSurveyId(survey.id)}
                            >
                                Vragenlijst aanpassen
                            </a>
                        </td>
                        <td>
                            <a
                                href="#"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#modalCreateQuestion"
                                onClick={() => handleOpenModal(survey.id)}
                            >
                                Vragen toevoegen
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default SurveyIndex;
