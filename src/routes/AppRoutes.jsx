import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authorization from '../pages/Authorization';
import InspectionsList from '../pages/InspectionsList';
import InspectionForm from '../pages/CreateInspection';
import NoteForm from '../pages/CreateNote';
import NotesList from '../pages/NotesList';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/inspections" />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/inspections" element={<InspectionsList />} />
            <Route path="/createinspection" element={<InspectionForm />} />
            <Route path="/noteslist" element={<NotesList />} />
            <Route path="/createnote" element={<NoteForm />} />
            <Route path="*" element={() => <div>404</div>} />
        </Routes>
    );
};

export default AppRoutes;