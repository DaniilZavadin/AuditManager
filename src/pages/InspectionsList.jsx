import React from 'react';
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';

const InspectionsList = () => {

    const getInspectionsData = () => {
        return (
            <div className="inspections-container">
                <Link to="/edit">+</Link>
                <Inspection name={'Kiev'} photo={'https://digital.ihg.com/is/image/ihg/intercontinental-kiev-5927192439-2x1?fit=fit,1&wid=2400&hei=1200&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0'} details={'Lorem ipsum dolor, sit amet consectetur Est temporibus nobis voluptatibus ad quo.'} />
            </div >
        )
    }
    return (getInspectionsData());
}

export default InspectionsList;