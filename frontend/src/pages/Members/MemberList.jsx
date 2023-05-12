import React from "react";
import { Header } from "../../components/Partials/Header/Header";

function MemberList() {
    return (
        <div id={"MemberList"}>
            <div className="container-fluid mt-5">
                <div className="top d-flex justify-content-between my-5">
                    <h1>Lijst met alle teamleden</h1>

                    <a href="#" className={"btn btn-primary d-flex align-items-center"}>Teamlid aanmaken</a>
                </div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Voornaam</th>
                        <th scope="col">Achternaam</th>
                        <th scope="col">Email</th>
                        <th scope="col">Toevoegen aan een team</th>
                        <th scope="col">Gegevens aanpassen</th>
                        <th scope="col">Gegevens verwijderen</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>Cornelius</td>
                        <td>Vos</td>
                        <td>c.vos@dyflexis.ru</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Roeland</td>
                        <td>Kuiper</td>
                        <td>r.kuiper@dyflexis.ru</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Jaap</td>
                        <td>Postma</td>
                        <td>j.postma@dyflexis.ru</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Rob</td>
                        <td>Janssen</td>
                        <td>r.janssen@dyflexis.ru</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Henk</td>
                        <td>Bakker</td>
                        <td>h.bakker@dyflexis.ru</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MemberList;