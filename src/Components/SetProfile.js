import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import CreateProfile from './CreateProfile';

function SetProfile(props) {
    return (
        <div>
            <ProfileHeader/>
            <CreateProfile/>
        </div>
    );
}

export default SetProfile;