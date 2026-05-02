import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Turns from "./pages/Turns";

import Loader from "./components/Loader";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <Loader />;

  if (!isAuthenticated) return <Login />;

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/turns" element={<Turns />} />
      </Routes>
    </MainLayout>
  );
}