import React from 'react';

const UserProfile = ({ user, deleteMember }) => {
    return (
        <div className="user_profile">
            <div className="user_img"></div>
            <div className="user_details">
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            {
                user.isMember === true ?
                    <div>
                        <span className="close" onClick={() => deleteMember(user.id)}>&times;</span>
                    </div> :
                    ''
            }
        </div >
    );
}

export default UserProfile;