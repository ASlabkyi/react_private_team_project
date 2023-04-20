import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(state => state.auth.token);

  return !token ? <Navigate to={redirectTo} /> : Component;
};
