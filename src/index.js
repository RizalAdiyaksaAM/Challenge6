import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import React, { useState } from "react";
import { TodoList } from './routes/TodoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

const queryMovie = new QueryClient();


export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryMovie}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
      <TodoList/>
      </GoogleOAuthProvider>
      </QueryClientProvider>
      <ToastContainer/>
    </React.StrictMode>
  );