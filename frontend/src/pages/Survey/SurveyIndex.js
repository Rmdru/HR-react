import React from "react";
import { Header } from "../../components/Partials/Header/Header";

function SurveyIndex() {
    return (
        <div id={"SurveyIndex"}>
            <div className="container mt-5">
                <div className="top d-flex justify-content-between my-5">
                    <h1>Vragenlijst</h1>

                    <a href="#" className={"btn btn-primary d-flex align-items-center"}>Vragenlijst aanmaken</a>
                </div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SurveyIndex;