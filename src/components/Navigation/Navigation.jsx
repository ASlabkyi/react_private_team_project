import { useSelector } from 'react-redux';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const token = useSelector(state => state.auth.token);

  return <div>{!token ? <AuthMenu /> : <UserMenu />}</div>;
};
