import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { setCurrentInspection } from '../../store/operations'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import './Inspection.scss';

const Inspection = ({ setInspections, city, description, inspector, id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const moveToNotes = () => {
        dispatch(setCurrentInspection(id))
        navigate('/noteslist')
    }

    const deleteInspection = (e) => {
        axios.put('//localhost:8000/inspection', { delete: true, id: id })
            .then(res => {
                axios.get('//localhost:8000/data')
                    .then(res => {
                        setInspections(res.data)
                    })
            })
        toast.success('Insception succsessfuly deleted!')
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
    }

    return (
        <div className="inspection-wrapper" onClick={moveToNotes}>
            <div className='inspection-wrapper__info'>{city}</div>
            <div className='inspection-wrapper__info'>{description}</div>
            <div className='inspection-wrapper__info'>
                {inspector}
                <img onClick={e => deleteInspection(e)} class='inspection-wrapper__info__image' src="delete.png" alt="delete" />
            </div>
        </div>
    )
}

Inspection.defaultProps = {
    city: 'Unknown',
    desc: "Unknown",
    inspector: 'Unknown',
};

export default Inspection;