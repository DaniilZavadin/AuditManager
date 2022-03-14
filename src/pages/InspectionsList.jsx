import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';
import './pages.scss';


const InspectionsList = () => {
    const [inspections, setInspections] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/data")
            .then(res => {
                setInspections(res.data)
            })
    }, [])

    const renderInspections = () => inspections.map(el => <Inspection city={el.city} description={el.description} inspector={el.inspector} id={el.id} />)

    return (<div className="inspections-container">
        <Link to="/createinspection">
            <img class='inspections-container__link' src='add.png' alt='add' />
        </Link>
        {renderInspections()}
    </div >)
}

export default InspectionsList;