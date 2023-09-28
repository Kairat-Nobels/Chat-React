import React from 'react'
import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
function Navbar()
{
    const user = false
    return (
        <AppBar color={'default'} position="static">
            <Toolbar variant='dense'>
                <Grid container justifyContent={'flex-end'}>
                    {
                        user ? <NavLink to={CHAT_ROUTE}>
                            <Button variant={'outlined'}>Выйти</Button>
                        </NavLink>
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