import React from 'react';
import { useNavigate } from 'react-router-dom'
import { setInspectionId } from '../../store/operations'
import { useDispatch } from 'react-redux';
import './Inspection.scss';

const Inspection = ({ city, desc, inspector }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const moveToNotes = () => {
        dispatch(setInspectionId(city))
        navigate('/noteslist')
    }

    return (
        <div className="inspection-wrapper" onClick={moveToNotes}>
            <div className='inspection-wrapper__name'>{city}</div>
            <div className='inspection-wrapper__name'>{desc}</div>
            <div className='inspection-wrapper__name'>{inspector}</div>
        </div>
    )
}

Inspection.defaultProps = {
    city: 'Unknown',
    desc: "Unknown",
    inspector: 'Unknown',
};

export default Inspection;