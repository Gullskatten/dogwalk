import * as React from 'react';
import { UserContext } from '../../context/User';
import { VerticalSpacer, HorizontalSpacer } from '../../components/Spacers';
import Text from '../../components/Text';
import useAuth from '../../hooks/useAuth';
import { Button } from '../../components/Button';

const Root: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);
  const { logout } = useAuth();

  return (
    <HorizontalSpacer>
      <VerticalSpacer>
        <Text variant="title">Hello, {userContext.data.displayName}!</Text>
        <Button
          gutterTop
          onClick={() => {
            if (window.confirm('Are you sure you want to log out?')) {
              logout();
            }
          }}
        >
          Logout
        </Button>
      </VerticalSpacer>
    </HorizontalSpacer>
  );
};

export default Root;
