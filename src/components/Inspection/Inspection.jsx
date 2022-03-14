import React from 'react';
import { useNavigate } from 'react-router-dom'
import { setCurrentInspection } from '../../store/operations'
import { useDispatch } from 'react-redux'
import './Inspection.scss';

const Inspection = ({ city, description, inspector, id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const moveToNotes = () => {
        dispatch(setCurrentInspection(id))
        navigate('/noteslist')
    }

    return (
        <div className="inspection-wrapper" onClick={moveToNotes}>
            <div className='inspection-wrapper__info'>{city}</div>
            <div className='inspection-wrapper__info'>{description}</div>
            <div className='inspection-wrapper__info'>{inspector}</div>
        </div>
    )
}

Inspection.defaultProps = {
    city: 'Unknown',
    desc: "Unknown",
    inspector: 'Unknown',
};

export default Inspection;