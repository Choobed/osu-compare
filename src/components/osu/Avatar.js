import React from 'react';

const Avatar = ({ avatarUrls }) => {
    return (
        <React.Fragment>
            <td>
                <img src={avatarUrls[0]} alt="An avatar as selected by the user" height="128" width="128" />
            </td>
            <td></td>
            <td style={{textAlign: "right"}}>
                <img src={avatarUrls[1]} alt="An avatar as selected by the user" height="128" width="128" />
            </td>
        </React.Fragment>
    );
}

export default Avatar;