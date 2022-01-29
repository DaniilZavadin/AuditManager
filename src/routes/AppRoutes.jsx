import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authorization from '../pages/Authorization';
import InspectionsList from '../pages/InspectionsList';
import InspectionDetails from '../pages/InspectionNote';
import InspectionForm from '../pages/CreateInspection';
import NoteForm from '../pages/CreateNote';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/inspections" />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/inspections" element={<InspectionsList />} />
            <Route path="/inspection_details" element={<InspectionDetails />} />
            <Route path="/createinspection" element={<InspectionForm />} />
            <Route path="/createnote" element={<NoteForm />} />
            <Route path="*" element={() => <div>404</div>} />
        </Routes>
    );
};

export default AppRoutes;