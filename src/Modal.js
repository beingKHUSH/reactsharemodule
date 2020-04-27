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

    const [users, setUsers] = useState(initialUsers);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState("");

    const owner = users.filter(user => user.isOwner === true);

    const showSuggestions = (e) => {
        setValue(e.target.value);
        if (e.target.value === "") {
            setResults([]);
        } else {
            let nonMembers = users.filter(user => user.isMember === false);
            let data = nonMembers.filter(obj => obj["name"].toLowerCase().includes(e.target.value.toLowerCase()));
            setResults(data);
        }
    }

    const deleteMember = (id) => {
        let userList = users.map((user) => {
            if (id === user.id) {
                user.isMember = false;
            }
            return user;
        });
        setUsers([...userList]);
    }

    const addMember = (id) => {
        let userList = users.map((user) => {
            if (id === user.id) {
                user.isMember = true;
            }
            return user;
        });
        setUsers([...userList]);
        setResults([]);
        setValue("");
    }

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
                            <label htmlFor="user">Add Member</label>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input type="text" id="user" name="user" value={value} placeholder="Enter name or registered email id" onChange={showSuggestions} />
                            <Suggestions results={results} addMember={addMember} />
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
                            users.filter(user => (user.isMember === true))
                                .map(user => <UserProfile key={`${user.id}-${user.name}`} user={user} id={user.id} deleteMember={deleteMember} />)
                        }

                    </div>
                </div>
                <div className="model_footer">
                    <button onClick={hide}>Done</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;