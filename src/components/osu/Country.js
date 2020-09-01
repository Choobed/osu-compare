import React from 'react';

const Country = ({ countries, fieldName }) => {
    return (
        <React.Fragment>
            <td>
                <img 
                    src={`https://osu.ppy.sh/images/flags/${countries[0].code}.png`}
                    alt="A flag of the player's country"
                    height="20"
                    width="30"
                    title={countries[0].name} />
            </td>
            <td style={{textAlign: "center"}}>{fieldName}</td>
            <td style={{textAlign: "right"}}>
                <img 
                    src={`https://osu.ppy.sh/images/flags/${countries[1].code}.png`}
                    alt="A flag of the player's country"
                    height="20"
                    width="30"
                    title={countries[1].name} />
            </td>
        </React.Fragment>
    );
}

export default Country;