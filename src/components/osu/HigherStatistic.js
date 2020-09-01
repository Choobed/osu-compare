import React from 'react';

const HigherStatistic = ({ fieldName, fields }) => {
    return (
        <React.Fragment>
            <td className={fields[0] > fields[1] ? "positive" : "negative"}>
                {fields[0].toLocaleString()}
            </td>
            <td style={{textAlign: "center"}}>
                {fieldName}
            </td>
            <td className={fields[0] < fields[1] ? "positive" : "negative"} style={{textAlign: "right"}}>
                {fields[1].toLocaleString()}
            </td>
        </React.Fragment>
    );
}

HigherStatistic.defaultProps = {
    fieldName: 'Statistic'
};

export default HigherStatistic;