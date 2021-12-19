import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authorization from '../pages/Authorization';
import InspectionsList from '../pages/InspectionsList';
import InspectionDetails from '../pages/InspectionDetails';
import InspectionEdit from '../pages/InspectionEdit';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/inspections" />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/inspections" element={<InspectionsList />} />
            <Route path="/inspection_details" element={<InspectionDetails />} />
            <Route path="/edit" element={<InspectionEdit />} />
            <Route path="*" element={() => <div>404</div>} />
        </Routes>
    );
};

export default AppRoutes;