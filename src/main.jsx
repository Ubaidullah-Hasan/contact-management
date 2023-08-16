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
  useQuery,
} from '@tanstack/react-query'
import ContactList from './Pages/ContactList/ContactList';

const queryClient = new QueryClient()







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
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
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
