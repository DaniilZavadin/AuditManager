import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';
import { useDispatch } from 'react-redux';
import { setInspectionsData } from '../store/operations'

const InspectionsList = () => {
    const dispatch = useDispatch()
    const [inspections, setInspections] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/data")
            .then(res => {
                setInspections(res.data)
                dispatch(setInspectionsData(res.data))
            })
    }, [])

    const renderInspections = () => inspections.map(el => <Inspection city={el.city} description={el.description} inspector={el.inspector} />)

    return (<div className="inspections-container">
        <Link to="/createinspection">+</Link>
        {renderInspections()}
    </div >)
}

export default InspectionsList;