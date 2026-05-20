// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importar todas as páginas

import About from './pages/About/About';
import home from './pages/Home/Home';


function PrivateRoute({ children }) {
    const token = localStorage.getItem('accessToken');
    const isValid = token && token !== 'undefined' && token !== 'null';
    return isValid ? children : <Navigate to="/" replace />;
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Rotas públicas */}
                

                {/*  Sobre */}
                <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />

                {/* Editar Perfil */}                
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;