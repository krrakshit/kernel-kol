import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';
import Login from './screens/Login';
import { Suspense, useEffect } from 'react';
import { useUser, useRefreshUser } from "./hooks/useUser";
import { Loader } from './components/Loader';

function App() {
  return (
    <div className="h-screen bg-slate-950">
      <Suspense fallback={<Loader />}>
        <AuthApp />
      </Suspense>
    </div>
  );
}

function AuthApp() {
  const user = useUser();
  const refreshUser = useRefreshUser();
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={user ? <Game /> : <Login />} />
    <Route path="/game/:gameId" element={user ? <Game /> : <Login />} />
  </Routes>
</BrowserRouter>
}

export default App;