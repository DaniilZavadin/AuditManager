import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Inspection from './components/Inspection';

function App() {
  return (
    <div className="App">
      <Inspection />
      <AppRoutes />
    </div>
  );
}

export default App;