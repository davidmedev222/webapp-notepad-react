import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = () => {
  const user = true;

  if (!user) return <Navigate to={'/login'} />;

  return <Outlet />;
};

export { ProtectRoute };
