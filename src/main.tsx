import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/a/b/c/d" element={<App/>}/>
        <Route path="*" element={<Navigate to="/a/b/c/d" replace/>}/>
    </>
), {basename: '/manipulate-route'})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
