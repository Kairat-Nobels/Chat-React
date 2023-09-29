import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import React, { createContext, useState } from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAqhLY6ssTyzQ4aFqV5NGPtbOrR7Tm0adQ",
  authDomain: "react-chat-283f1.firebaseapp.com",
  projectId: "react-chat-283f1",
  storageBucket: "react-chat-283f1.appspot.com",
  messagingSenderId: "138574694546",
  appId: "1:138574694546:web:da1e2bce041da678f97e4b",
  measurementId: "G-T1T3CYCJ6Q"
})
export const Context = createContext(null)
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)
function App()
{
  const [user, setUser] = useState(null)
  return (
    <Context.Provider value={{ user, setUser, firebaseApp, auth, firestore }}>
      <BrowserRouter>
        <div >
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Context.Provider>

  )
}

export default App
