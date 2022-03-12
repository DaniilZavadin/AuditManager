import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Note from '../components/Note/Note';


const NoteList = () => {
    const currInsp = useSelector(state => state.currentInspectionId)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/data")
            .then(res => {
                const dataForRender = res.data.find(el => el.id === currInsp)
                setNotes(dataForRender.notes)
            })
    }, [currInsp])

    const renderNotes = () => notes.map(el => <Note issue={el.issue} photo={el.photo} recomendations={el.recomendations} />)

    return (<div className="inspections-container">
        <Link to="/inspections">&lt;</Link>
        <Link to="/createnote">+</Link>
        {renderNotes()}
    </div >)
}

export default NoteList;