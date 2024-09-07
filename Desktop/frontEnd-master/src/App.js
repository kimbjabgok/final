// App.jsx
import React from 'react';
import PassWord from './pages/PassWord';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Memory from './pages/Memory'
import MainPage from './pages/MainPage';
import Content2 from './pages/Content2';
import CreateGroupPage from './pages/CreateGroupPage';
import Layout from "./components/Layout";
import NoData from "./pages/NoData";
import MemoryDetail from './pages/MemoryDetail';
import ServerTestButton from './test';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="groups/:id" element={<Memory />} />
          <Route path='/groups/:id/memory' element={<MemoryDetail />} />
        </Route>
        <Route path="/" element={<MainPage/>} />
        <Route path="CreateGroup" element={<CreateGroupPage />} />
        <Route path="/password" element={<PassWord />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/groups/:id/memory' element={<MemoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;