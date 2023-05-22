import React, {useEffect, useState} from 'react';

// Define state variable 'members' and its setter function 'setMembers'
function MemberList() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('http://127.0.0.1:5000/api/v1/members')
            .then(response => response.json()) // Convert response to JSON
            .then(data => {
                setMembers(data); // Update 'members' state with fetched data

            })
            .catch(error => {
                console.error('Er is een probleem bij het ophalen van gegevens:', error); // Log error if fetching fails
            });
    }, []);

    return (
        <table className="table">
            <thead className="thead-light">
            <tr>
                <th scope="col"></th>
                <th scope="col">Naam</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            {members.map(user => (
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.team.name}</td>
                </tr>
            ))}


            </tbody>
        </table>
    );
}

export default MemberList;
