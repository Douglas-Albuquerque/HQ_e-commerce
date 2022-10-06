import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Home/index'


const RoutePage = () => {
  return (
    <Router>
      <Route>
        <Route path="/" element={<HomePage/>} />
      </Route>
    </Router>
  )
}

export default RoutePage