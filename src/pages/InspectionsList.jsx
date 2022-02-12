import React from 'react';
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';

const InspectionsList = () => {

    return (<div className="inspections-container">
        <Link to="/createinspection">+</Link>
        <Inspection city={'Kiev'} desc={'Lorem ipsum dolor, sit amet consectetur Est temporibus nobis voluptatibus ad quo.'} inspector={"Alan Wake"} />
        <Inspection city={'Lviv'} desc={'Lorem ipsum dolor, sit amet consectetur Est temporibus nobis voluptatibus ad quo.'} inspector={"Aleksandr Krashko"} />
    </div >)
}

export default InspectionsList;