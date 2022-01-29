import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';

const InspectionsList = () => {

    useEffect(() => {})

    const getInspectionsData = () => {
        return (
            <div className="inspections-container">
                <Link to="/createinspection">+</Link>
                <Inspection name={'Kiev'} details={'Lorem ipsum dolor, sit amet consectetur Est temporibus nobis voluptatibus ad quo.'} />
            </div >
        )
    }
    return (getInspectionsData());
}

export default InspectionsList;