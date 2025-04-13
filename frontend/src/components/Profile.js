import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h2>{user.name}</h2>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} />
            <p>Bio: {user.bio}</p>
            <p>Location: {user.location}</p>
            <p>Public Repositories: {user.public_repos}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile on GitHub</a>
        </div>
    );
};

export default Profile;