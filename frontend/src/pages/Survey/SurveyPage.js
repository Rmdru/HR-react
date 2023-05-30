import React from "react";
import CreateModal from "../../components/Survey/CreateModal";
import EditModal from "../../components/Survey/EditModal";
import SurveyIndex from "../../components/Survey/SurveyIndex";

function SurveyPage() {
    return (
        <>
            <CreateModal/>
            <EditModal/>
            <div id={"SurveyPage"}>
                <div className="container mt-5">
                    <div className="top d-flex justify-content-between my-5">
                        <h1>Vragenlijst</h1>

                        <a href="#" className={"btn btn-primary d-flex align-items-center"} data-toggle="modal"
                           data-target="#modalCreateSurvey">Vragenlijst aanmaken</a>
                    </div>
                    <SurveyIndex/>
                </div>
            </div>
        </>
    )
}

export default SurveyPage;