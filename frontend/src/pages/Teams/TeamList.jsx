import React from "react";
import { Header } from "../../components/Partials/Header/Header";

function TeamList() {
    return (
        <div id={"TeamList"}>
            <div className="container-fluid mt-5">
                <div className="top d-flex justify-content-between my-5">
                    <h1>Lijst met alle teams</h1>

                    <a href="#" className={"btn btn-primary d-flex align-items-center"}>Team aanmaken</a>
                </div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Naam van het team</th>
                        <th scope="col">Teamleden</th>
                        <th scope="col">Teamlid toevoegen</th>
                        <th scope="col">Teamlid verwijderen</th>
                        <th scope="col">Gegevens aanpassen</th>
                        <th scope="col">Gegevens verwijderen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>De turboslakken</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>De loonslaven</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>De deadline verslaafden</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>De Clarity meesters</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>De Tech Reuzen</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>De Coyotes</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TeamList;