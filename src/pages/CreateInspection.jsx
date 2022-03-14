import React from 'react';
import { Link } from 'react-router-dom'
import InspectionForm from '../components/InspectionForm/InspectionForm';
import './pages.scss';

const CreateInspection = () => {
    return (
        <div className="form-container">
            <Link to="/inspections">
                <img class='form-container__link' src='back.png' alt='back' />
            </Link>
            <InspectionForm />
        </div >
    )
}

export default CreateInspection;