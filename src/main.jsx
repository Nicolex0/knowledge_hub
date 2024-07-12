import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthLayout, Login } from './components/index.js';
import './index.css';
import Home from './pages/Home.jsx';
import store from './store/store.js';

import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';

import AddPost from "./pages/AddPost";
import AllPosts from "./pages/AllPosts";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import Signup from './pages/Signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])


// const routes =
//     createRoutesFromElements(
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Home />} loading />
//         <Route
//           path="/login"
//           element={
//             <AuthLayout authentication={false}>
//               <Login />
//             </AuthLayout>
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <AuthLayout authentication={false}>
//               <Signup />
//             </AuthLayout>
//           }
//           loading
//         />
//         <Route
//           path="/all-posts"
//           element={
//             <AuthLayout authentication>
//               <AllPosts />
//             </AuthLayout>
//           }
//           loading
//         />
//         <Route
//           path="/add-post"
//           element={
//             <AuthLayout authentication>
//               <AddPost />
//             </AuthLayout>
//           }
//           loading
//         />
//         <Route
//           path="/edit-post/:slug"
//           element={
//             <AuthLayout authentication>
//               <EditPost />
//             </AuthLayout>
//           }
//           loading
//         />
//         <Route path="/post/:slug" element={<Post />} loading />
//       </Route>
//  )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)