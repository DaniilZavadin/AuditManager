import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Note from '../components/Note/Note';
import { useSelector } from 'react-redux';

const NoteList = () => {
    const inspectionsData = useSelector(state => state.inspectionsData)
    const currInsp = useSelector(state => state.currentInspectionId)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const dataForRender = inspectionsData.find(el => el.id === currInsp)
        console.log(dataForRender.notes);
        setNotes(dataForRender.notes)
    }, [])

    const renderNotes = () => notes.map(el => <Note issue={el.issue} photo={el.photo} recomendations={el.recomendations} />)

    return (<div className="inspections-container">
        <Link to="/inspections">&lt;</Link>
        <Link to="/createnote">+</Link>
        {renderNotes()}
    </div >)
}

export default NoteList;