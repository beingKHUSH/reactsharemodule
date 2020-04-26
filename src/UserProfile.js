import React from 'react';

const UserProfile = ({ user, deleteMember }) => {
    return (
        <div className="user_profile">
            <div class="user_img"></div>
            <div class="user_details">
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            {
                user.isMember === true ?
                    <div>
                        <span className="close">&times;</span>
                    </div> :
                    ''
            }
        </div >
    );
}

export default UserProfile;