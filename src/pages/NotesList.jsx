import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Note from '../components/Note/Note';
import { useSelector } from 'react-redux';

const NoteList = () => {
    const [notes, setNotes] = useState([])
    const inspectionsData = useSelector(state => state.inspectionsData)
    const currInsp = useSelector(state => state.currentInspection)

    useEffect(() => {
        const noteList = inspectionsData.find(el => el.city === currInsp.city && el.description === currInsp.description && el.inspector === currInsp.inspector)
        setNotes(noteList)
    }, [])

    const renderNotes = () => notes.map(el => <Note issue={el.issue} photo={el.photo} description={el.description} />)

    return (<div className="inspections-container">
        <Link to="/createinspection">+</Link>
        {renderNotes()}
    </div >)
}

export default NoteList;