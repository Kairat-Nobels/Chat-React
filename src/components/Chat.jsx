import React, { useContext, useState, useEffect, useRef } from 'react';
import { Context } from '../App';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { addDoc, collection, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './Chat.css';

function Chat()
{
    const { user, auth, firestore, firebaseApp } = useContext(Context);
    const [value, setValue] = useState('');
    const messagesRef = collection(firestore, 'messages');
    const queryMessages = query(messagesRef, orderBy('createdAT'));

    // Получение сообщений с помощью useCollectionData
    const [messages] = useCollectionData(queryMessages, { idField: 'id' });

    const messagesContainerRef = useRef(null);

    const sendMessage = () =>
    {
        if (value.trim() === '') return;

        addDoc(messagesRef, {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            text: value.trim(),
            createdAT: serverTimestamp(),
        });

        setValue('');
    }

    useEffect(() =>
    {
        messagesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Container>
            <Grid container style={{ height: window.innerHeight - 80, marginTop: '20px' }} justifyContent={'center'}>
                <div style={{ width: '80%', height: '70vh', border: '1px solid gray', overflow: 'scroll' }}>
                    {messages && messages.map(message => (
                        <div style={{ margin: 10, border: auth.currentUser.uid === message.uid ? '2px solid green' : '2px dashed red', marginLeft: auth.currentUser.uid === message.uid ? 'auto' : '10px', width: 'fit-content', padding: 5 }} key={message.createdAT}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    ))}
                    <div ref={messagesContainerRef}></div>
                </div>
                <Grid container direction={'column'} alignItems={'flex-end'} style={{ width: '80%' }}>
                    <TextField value={value} onChange={e => setValue(e.target.value)} fullWidth maxRows={2} variant={'outlined'} />
                    <Button onClick={sendMessage} variant={'outlined'}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;
