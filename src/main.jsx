import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github, { githubInfoLoader } from './Components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='header' element={<Header/>}/>
    <Route path='footer' element={<Footer/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:{userId}' element={<User/>}/>
    <Route
    loader={githubInfoLoader}
    path='github' 
    element={<Github/>}/>
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
