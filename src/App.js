import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Loading from './components/Loading';
import AddNewThread from './pages/AddNewThread';
import DetailThreadPage from './pages/DetailThreadPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const {
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <div className="w-screen h-screen" data-theme="dark">
      <Header />
      <Loading />
      <main>
        <Routes>
          <Route path="/" element={<ThreadsPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/new" element={<AddNewThread />} />
          <Route path="/detail/:id" element={<DetailThreadPage />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
