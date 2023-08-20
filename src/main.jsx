import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import AddNew from './Pages/AddNew/AddNew';
import Action from './Pages/Action/Action';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ContactList from './Pages/ContactList/ContactList';
import SearchPage from './Pages/SearchPage/SearchPage';
import Home from './Pages/Home/Home';
import AuthProvider from './AuthProvider.jsx/AuthProvider';

const queryClient = new QueryClient()







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addnew",
        element: <AddNew></AddNew>
      },
      {
        path: "/action",
        element: <Action></Action>
      },
      {
        path: "/contactList",
        element: <ContactList></ContactList>
      },
      {
        path: "/contacts/:name",
        element: <SearchPage></SearchPage>
      },
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
