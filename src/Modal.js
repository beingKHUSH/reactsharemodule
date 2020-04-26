import React from 'react';
import { useState } from 'react';
import UserProfile from './UserProfile';
import Suggestions from './Suggestions';

const Modal = ({ isShowing, hide }) => {
    const initialUsers = [
        { "id": 1, "name": "Adrianna", "email": "adrianna@gmail.com", "isOwner": true },
        { "id": 2, "name": "Judd", "email": "judd@live.in", "isMember": true },
        { "id": 3, "name": "Anna", "email": "anna@example.in", "isMember": false },
        { "id": 4, "name": "Reta", "email": "reta@example.in", "isMember": true },
        { "id": 5, "name": "Toney", "email": "toney@live.in", "isMember": false },
        { "id": 6, "name": "Alene", "email": "alene@live.in", "isMember": true },
        { "id": 7, "name": "Ivah", "email": "ivah@live.in", "isMember": true },
        { "id": 8, "name": "Alda", "email": "alda@example.in", "isMember": false },
        { "id": 9, "name": "Courtney", "email": "courtney@live.in", "isMember": false },
        { "id": 10, "name": "Cynthia", "email": "cynthia@example.in", "isMember": false },
        { "id": 11, "name": "Elda", "email": "elda@example.in", "isMember": false },
        { "id": 12, "name": "Kamron", "email": "kamron@live.in", "isMember": false }
    ];
    const initialMembers = initialUsers.filter(user => user.isMember === true);
    const initialNonMembers = initialUsers.filter(user => user.isMember === false);

    const [users, setUsers] = useState(initialUsers);
    const [results, setResults] = useState([]);
    const [members, setMembers] = useState(initialMembers);
    const [nonMembers, setNonMembers] = useState(initialNonMembers);

    const owner = users.filter(user => user.isOwner === true);

    const showSuggestions = (e) => {
        if (e.target.value === "") {
            setResults([]);
        } else {
            let data = nonMembers.filter(obj => obj["name"].toLowerCase().includes(e.target.value.toLowerCase()));
            setResults(data);
        }
    }

    // const deleteMember = (id) => {
    //     let userList = users.map((user) => {
    //         if (id === user.id) {
    //             user.isMember = false;
    //         }
    //     });
    //     setUsers(userList);

    // }

    // const addMember = (id) => {

    // }

    return (
        <div className={isShowing ? 'modal show' : 'modal'}>
            <div className="modal_section">
                <div className="modal_header">
                    <div className="modal_title_section">
                        <span>Sharing Settings</span>
                        <span className="close" onClick={hide}>&times;</span>
                    </div>
                    <form>
                        <div className="form_label">
                            <label for="user">Add Member</label>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input type="text" id="user" name="user" placeholder="Enter name or registered email id" onChange={showSuggestions} />
                            <Suggestions results={results} />
                        </div>
                    </form>
                </div>
                <div className="modal_content">
                    <div className="owner_section">
                        <span>Owner</span>
                        <UserProfile user={owner[0]} />
                    </div>
                    <div className="member_section">
                        <span>Members</span>
                        {
                            members.map((user) => <UserProfile key={`${user.id}-${user.name}`} user={user} id={user.id} />)
                        }
                    </div>
                </div>
                <div className="model_footer">
                    <button>Done</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;