import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';

const InspectionsList = () => {
    const [inspections, setInspections] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/data")
            .then(res => {
                setInspections(res.data)
            })
    }, [])

    const renderInspections = () => {
        console.log(inspections);
        inspections.map(el => <Inspection city={el.city} desc={el.description} inspector={el.inspector} />)
    }

    return (<div className="inspections-container">
        <Link to="/createinspection">+</Link>
        {renderInspections()}
    </div >)
}

export default InspectionsList;