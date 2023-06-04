import React, {useEffect, useState} from 'react';

function MemberList() {
    const [members, setMembers] = useState([]);
    const [modalMemberId, setModalMemberId] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/v1/members/all')
            .then(response => response.json())
            .then(data => {
                setMembers(data);
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
                <th scope="col">email</th>
                <th scope="col">team</th>
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
                        <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#MemberEditModal"
                           onClick={() => setModalMemberId(member.id)}>Aanpassen</a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MemberList;
