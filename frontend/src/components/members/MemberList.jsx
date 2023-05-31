import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Define state variable 'members' and its setter function 'setMembers'
function MemberList() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('http://127.0.0.1:5000/api/v1/members/all')
            .then(response => response.json()) // Convert response to JSON
            .then(data => {
                console.log(data);
                setMembers(data); // Update 'members' state with fetched data

            })
            .catch(error => {
                console.error('Er is een probleem bij het ophalen van gegevens:', error); // Log error if fetching fails
            });
    }, []);

    // Update member by ID
    const updateMember = async (id) => {
        await axios.delete(`/members/${id}`);
        setMembers(members.filter((user) => user.id !== id));
        };
    
    
    return (
        <table className="table">
            <thead className="thead-light">
            <tr>
                <th scope="col"></th>
                <th scope="col">Naam</th>
                <th scope="col">Email</th>
                <th scope="col">Team</th>
                <th scope="col">...</th>
            </tr>
            </thead>
            <tbody>
            {members.map(user => (
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.team_name}</td>
                    <td>
                    <button onClick={() => updateMember(user.id)} 
                    href="#" className={"btn btn-primary d-flex align-items-center"} data-toggle="modal" 
                    data-target="#modalMemberModal">Aanpassen</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default MemberList;
