import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { Context } from '../App'

function AppRouter()
{
    const { auth, user, setUser } = useContext(Context)

    useEffect(() =>
    {
        if (auth.currentUser !== null) {
            setUser(auth.currentUser.displayName)
        }
        else setUser(null)
    }, [auth])
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
