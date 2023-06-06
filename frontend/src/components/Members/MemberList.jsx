import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MemberEditModal from "./MemberEditModal";

function MemberList() {
    const [members, setMembers] = useState([]);
    const [modalMemberId, setModalMemberId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/members/all')
            .then(response => response.json())
            .then(data => {
                setMembers(data);
            })
            .catch(error => {
                console.error('Er is een probleem bij het ophalen van gegevens:', error);
            });
    }, []);

    const handleOpenModal = (memberId) => {
        setModalMemberId(memberId);
    };

    return (
        <>
            {modalMemberId && (
                <MemberEditModal memberId={modalMemberId} onClose={() => setModalMemberId(null)}/>
            )}

            <table className="table">
                <thead className="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Naam</th>
                <th scope="col">Email</th>
                <th scope="col">Team</th>
                <th scope="col">...</th>
                </tr>
                </thead>
                <tbody>
                {members.map(member => (
                    <tr key={member.id}>
                        <th scope="row">{member.id}</th>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.team_name}</td>
                        <td>
                            <a href="#" className="btn btn-primary" data-toggle="modal">Teamleden</a>
                        </td>
                        <td>
                            <a href="#" className="btn btn-primary" data-toggle="modal"
                               data-target="#MemberEditModal" onClick={() => handleOpenModal(member.id)}>Aanpassen</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default MemberList;