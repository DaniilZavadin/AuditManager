import React from 'react';
import Inspection from '../components/Inspection';

const InspectionsList = () => { 

    const getInspectionsData = () => {
        return(<Inspection name={'Kiev'}/>)
    }

    return (
    <div className="inspections-container">
        {getInspectionsData()}
    </div >
    ); 
}

export default InspectionsList;