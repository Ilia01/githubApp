import React from 'react';

const Avatar = ({ avatarUrl, onAvatarChange }) => {
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onAvatarChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="avatar-container">
            <img src={avatarUrl} alt="User Avatar" className="avatar" />
            <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
    );
};

export default Avatar;