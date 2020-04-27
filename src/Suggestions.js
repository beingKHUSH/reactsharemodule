import React from 'react';
import UserProfile from './UserProfile';

const Suggestions = ({ results, addMember }) => {
    return (
        results.length !== 0 ? (<div className="suggestion">
            <ul>
                {
                    results.map((user) =>
                        <li key={`${user.id}-${user.name}`} onClick={() => addMember(user.id)}>
                            <UserProfile user={user} id={user.id} />
                        </li>
                    )
                }
            </ul>
        </div>) : ""
    );
}

export default Suggestions;