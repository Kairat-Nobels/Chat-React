import { Box, Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Context } from '../App'

function Login()
{
    const { auth, setUser } = useContext(Context)

    const login = async () =>
    {
        const provider = new GoogleAuthProvider()
        const { user } = await signInWithPopup(auth, provider)
        setUser(user)
    }

    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 50 }} alignItems={'center'} justifyContent={'center'}>
                <Grid style={{ width: 400, background: 'lightgray', borderRadius: 15 }} container alignItems={'center'} direction={'column'}>
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login