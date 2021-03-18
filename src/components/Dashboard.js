import React from 'react';
import { JsonToTable } from 'react-json-to-table';
import Dropdown from 'react-dropdown';

function Dashboard({options, onSelect , selectedOption , data}) {
    console.log(options);
    return (
        <div>
            <Dropdown className="display" options={options} onChange={onSelect} value={selectedOption} placeholder="Select a Category" />
            <JsonToTable style={{fontSize: "1.5rem"}} json={data} /> 
        </div>
    )
}

export default Dashboard
