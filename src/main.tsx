import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";

// index 페이지로 강제 리다이렉트하는 트랩은 <Routes /> 로 감싸지 않아야 동작한다
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/a/b/c/d" element={<App/>}/>
        {/*index 페이지로 강제 리다이렉트하는 트랩을 설치한다*/}
        <Route path="*" element={<Navigate to="/a/b/c/d" replace/>}/>
    </>
// createRoutesFromElements 함수의 옵션으로 basename 을 넘겨서 시작점을 조정한다.
), {basename: '/manipulate-route'})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
