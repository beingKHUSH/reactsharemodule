import React from 'react';
import UserProfile from './UserProfile';

const Suggestions = ({ results }) => {
    return (
        <div className="suggestion">
            {

                results.map((user) => <UserProfile key={`${user.id}-${user.name}`} user={user} id={user.id} />)

            }
        </div>
    );
}

export default Suggestions;