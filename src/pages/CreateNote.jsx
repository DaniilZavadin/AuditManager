import React from 'react';
import { Link } from 'react-router-dom'
import NoteForm from '../components/NoteForm/NoteForm';

const InspectionsList = () => {
    const getInspectionsData = () => {
        return (
            <div className="inspections-container">
                <Link to="/inspections"> &lt; </Link>
                <NoteForm />
            </div >
        )
    }
    return (getInspectionsData());
}

export default InspectionsList;