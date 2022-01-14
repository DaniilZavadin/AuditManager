import React from 'react';
import { Link } from 'react-router-dom'
import EditingForm from '../components/RedactionForm/Form';

const InspectionsList = () => {
    const getInspectionsData = () => {
        return (
            <div className="inspections-container">
                <Link to="/inspections"> &lt; </Link>
                <EditingForm />
            </div >
        )
    }
    return (getInspectionsData());
}

export default InspectionsList;