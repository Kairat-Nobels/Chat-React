import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'

function AppRouter()
{
    const user = false
    return (
        <>
            <Routes>
                {user ? (
                    privateRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                ) : (
                    publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))
                )}

            </Routes>
            <Navigate to={user ? CHAT_ROUTE : LOGIN_ROUTE} />
        </>
    )
}

export default AppRouter
