import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'

function Login()
{
    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 50 }} alignItems={'center'} justifyContent={'center'}>
                <Grid style={{ width: 400, background: 'lightgray', borderRadius: 15 }} container alignItems={'center'} direction={'column'}>
                    <Box p={5}>
                        <Button variant={'outlined'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login