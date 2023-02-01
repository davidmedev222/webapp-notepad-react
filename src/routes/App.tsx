import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectRoute } from './protectRoute/ProtectRoute';
import { Home, Profile, Login } from '../screens/export';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
