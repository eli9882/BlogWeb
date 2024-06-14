import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import './queries.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Author from './pages/Author';
import CreatePosts from './pages/CreatePosts';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import EditPosts from './pages/EditPosts';
import DeletePosts from './pages/DeletePosts';
import Logout from './pages/Logout';
import UserProvider from './context/userContext';





const router =  createBrowserRouter([
{
path: "/",
element: <UserProvider><Layout/></UserProvider>,
errorElement: <ErrorPage/>,
children: [
  {index: true, element: <Home />},
  {path: "posts/:id", element: <PostDetail />},
  {path: "register", element: <Register />},
  {path: "login", element: <Login />},
  {path: "profile/:id", element: <UserProfile />},
  {path: "authors", element: <Author />},
  {path: "create", element: <CreatePosts />},
  {path: "posts/categories/:category", element: <CategoryPosts />},
  {path: "posts/users/:id", element: <AuthorPosts />},
  {path: "myposts/:id", element: <Dashboard />},
  {path: "posts/:id/edit", element: <EditPosts />},
  {path: "posts/:id/delete", element: <DeletePosts />},
  {path: "logout", element: <Logout />},

]

}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);


