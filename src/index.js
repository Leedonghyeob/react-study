import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Layout from './components/Layout';
import ClassComponent from './components/ClassComponent';
import FunctionalComponents from './components/FunctionalComponents';
import UseStateTest from './components/Hook/UseStateTest';
import UseEffectTest from './components/Hook/UseEffectTest';
import UseMemoTest from './components/Hook/UseMemoTest';
import UseCallbackTest from './components/Hook/UseCallbackTest';



import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/ErrorPage'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import UseRefTest from './components/Hook/UseRefTest';
import Layout2 from './components/Layout2';

// 연결할 path(주소)와 컴퍼턴트를 연결하기 위한 설정 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2 />,
    errorElement: <ErrorPage />
   
  },
  {
    path: "/hello",
    element: <h2>Hello, React!</h2>
  },
  {
    path: "/component/class",
    element : <ClassComponent />
    
  },
  {
    path: "/component/functional",
    element : <FunctionalComponents />
  },
  {
    path: "/hook/state",
    element: <UseStateTest />
  },
  {
    path: "/hook/effect",
    element: <UseEffectTest />
  },
  {
    path: "/hook/memo",
    element : <UseMemoTest/>
    },
  {
    path: "/hook/callback",
    element: <UseCallbackTest/>
  },
  {
    path: "/hook/dom",
    element: <UseRefTest />
  },
  

]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <RouterProvider router={router}/>
    */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
