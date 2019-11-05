import * as React from 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import Branding from '../../components/Branding';
import { UserContext } from '../../context/User';
import Text from '../../components/Text';

const Centerer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Login: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);
  const { login } = useAuth();

  return (
    <Centerer>
      {userContext.data.loggingIn ? (
        <Text variant="subtitle">Logging in....</Text>
      ) : (
        <>
          <Branding />
          <Button variant="secondary" gutterTop onClick={login}>
            Log in with Google
          </Button>
        </>
      )}
    </Centerer>
  );
};

export default Login;
