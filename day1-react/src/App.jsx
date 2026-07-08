import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import OldWork from './pages/OldWork';
import CartDemo from './pages/CartDemo';

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  const { colors } = useTheme();

  return (
    <div style={{ minHeight: '100vh' , background: colors.background, color: colors.text, transition: 'all 0.3s'}}>
      <Navbar />

      <Suspense fallback={
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Loading...</p>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/oldwork" element={<OldWork />} />
          <Route path="/cart" element={<CartDemo />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;