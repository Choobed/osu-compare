import React from 'react';

const UsernameInput = ({ username, onUsernameChange }) => {
    return (
        <div className="ui left icon input">
            <i className="user icon"></i>
            <input
                type="text"
                value={username}
                onChange={e => onUsernameChange(e.target.value)}
                placeholder="osu! username"
                required
            />
        </div>
    );
}

export default UsernameInput;