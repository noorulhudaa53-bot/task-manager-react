import { Navigate } from 'react-router-dom';

/**
 * Protected Route — Only logged in users can access
 * @param {ReactNode} children - Page to protect
 */
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;