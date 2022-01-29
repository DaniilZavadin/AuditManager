import React from 'react';
import { Link } from 'react-router-dom'
import InspectionForm from '../components/InspectionForm/InspectionForm';

const InspectionsList = () => {
    const getInspectionsData = () => {
        return (
            <div className="inspections-container">
                <Link to="/inspections"> &lt; </Link>
                <InspectionForm />
            </div >
        )
    }
    return (getInspectionsData());
}

export default InspectionsList;