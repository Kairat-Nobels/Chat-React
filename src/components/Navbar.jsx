import React, { useContext } from 'react'
import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { Context } from '../App'
function Navbar()
{
    const { user, auth } = useContext(Context)
    return (
        <AppBar color={'default'} position="static">
            <Toolbar variant='dense'>
                <Grid container justifyContent={'flex-end'}>
                    {
                        user ? <Button onClick={() => auth.signOut()} variant={'outlined'}>Выйти</Button>
                            : <NavLink to={LOGIN_ROUTE}>
                                <Button variant={'outlined'}>Логин</Button>
                            </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar