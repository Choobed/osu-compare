import React from 'react';

const Username = ({ids, usernames}) => {
    return (
        <React.Fragment>
            <td>
                <a href={`https://osu.ppy.sh/users/${ids[0]}`} target="_blank" rel="noopener noreferrer">
                    {usernames[0]}
                </a>
            </td>
            <td></td>
            <td style={{textAlign: "right"}}>
                <a href={`https://osu.ppy.sh/users/${ids[1]}`} target="_blank" rel="noopener noreferrer">
                    {usernames[1]}
                </a>
            </td>
        </React.Fragment>
    );
}

export default Username;