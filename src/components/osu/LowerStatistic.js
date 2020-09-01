import React from 'react';

const LowerStatistic = ({ fieldName, fields }) => {
    return (
        <React.Fragment>
            <td className={fields[0] > fields[1] ? "negative" : "positive"}>
                {fields[0].toLocaleString()}
            </td>
            <td style={{textAlign: "center"}}>
                {fieldName}
            </td>
            <td className={fields[0] < fields[1] ? "negative" : "positive"} style={{textAlign: "right"}}>
                {fields[1].toLocaleString()}
            </td>
        </React.Fragment>
    );
}

LowerStatistic.defaultProps = {
    fieldName: 'Statistic'
};

export default LowerStatistic;