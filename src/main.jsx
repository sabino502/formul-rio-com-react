import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import { Navigate } from 'react-router-dom'
import './styles/GlobalStyles.css'

function AppWrapper() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registro" replace />} />
        <Route
          path="/registro"
          element={<Registro />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)