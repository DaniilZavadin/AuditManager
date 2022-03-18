import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Note from '../components/Note/Note';
import './pages.scss';


const NoteList = () => {
    const currInsp = useSelector(state => state.currentInspectionId)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchMyAPI = async () => {
            let response = await axios.get("http://localhost:8000/data")
            response = response.data.find(el => el.id === currInsp)
            setNotes(response.notes)
        }
        fetchMyAPI()
    }, [currInsp])

    const renderNotes = () => notes.map(el => <Note
        setNotes={setNotes}
        issue={el.issue}
        photo={el.photo}
        recomendations={el.recomendations}
        id={el.id}
    />)

    return (<div className="notes-container">
        <Link to="/inspections">
            <img class='notes-container__link' src='back.png' alt='back' />
        </Link>
        <Link to="/createnote">
            <img class='notes-container__link' src='add.png' alt='add' />
        </Link>
        {notes ? renderNotes() : setNotes([])}
    </div >)
}

export default NoteList;